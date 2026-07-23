#!/bin/bash
# 双版本同步 + 发版留档工具
#   ./sync.sh                 发布：编辑版(edit/) → 正式版(根目录)，自动打 release tag 并部署
#   ./sync.sh pull            反向：正式版 → 编辑版（放弃编辑版改动）
#   ./sync.sh list            查看历史发版记录（git tag）
#   ./sync.sh rollback <tag>  把正式版回滚到某次发版（编辑版不受影响）
# 环境变量 DRY=1 试运行（不 push）
set -e
cd "$(dirname "$0")"

case "$1" in
pull)
  cp index.html data.js edit/
  rsync -a --delete assets/ edit/assets/
  echo "✅ 已用正式版重置编辑版"
  exit 0;;
list)
  echo "=== 发版历史（新→旧） ==="
  git tag -l 'release/*' --sort=-creatordate --format='%(refname:short)  %(creatordate:short) %(subject)'
  exit 0;;
rollback)
  tag="$2"
  [ -n "$tag" ] || { echo "用法: ./sync.sh rollback release/xxx（先用 ./sync.sh list 查看）"; exit 1; }
  git rev-parse "$tag" >/dev/null 2>&1 || { echo "❌ 找不到 tag: $tag"; exit 1; }
  git checkout "$tag" -- index.html data.js assets
  git add -A
  git commit -m "release: 回滚正式版到 $tag"
  [ "$DRY" = "1" ] || git push
  echo "✅ 正式版已回滚到 $tag（编辑版未动；想让编辑版也回去: ./sync.sh pull）"
  exit 0;;
esac

# ---- 发布 ----
v_edit=$(grep -o "version:'[^']*'" edit/data.js | head -1 | sed "s/version:'\(.*\)'/\1/")
v_prod=$(grep -o "version:'[^']*'" data.js | head -1 | sed "s/version:'\(.*\)'/\1/")
if ! cmp -s edit/data.js data.js && [ "$v_edit" = "$v_prod" ]; then
  echo "⚠️  内容有改动但版本号没变（$v_edit），老玩家存档不会重置"
  if [ -t 0 ]; then
    read -p "继续发布？(y/N) " a
    [ "$a" = "y" ] || { echo "已取消"; exit 1; }
  fi
fi

cp edit/index.html edit/data.js .
rsync -a --delete edit/assets/ assets/

if [ -z "$(git status --porcelain)" ]; then
  echo "ℹ️  编辑版与正式版一致，无需发布"
  exit 0
fi

tag="release/${v_edit}-$(date +%Y%m%d-%H%M%S)"
git add -A
git commit -m "release: 发布 ${v_edit} → 正式版

tag: ${tag}"
git tag -a "$tag" -m "正式版发布 ${v_edit}"
if [ "$DRY" = "1" ]; then
  echo "🧪 DRY 模式：已本地提交+打tag（$tag），未 push"
else
  git push --follow-tags
  echo "✅ 已发布并打 tag: $tag，GitHub Pages 部署中（约30秒）"
fi
echo "   历史: ./sync.sh list   回滚: ./sync.sh rollback $tag"
