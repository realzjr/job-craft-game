#!/bin/bash
# 双版本同步工具
#   ./sync.sh        编辑版(edit/) → 正式版(根目录)，提交并部署上线
#   ./sync.sh pull   正式版 → 编辑版（放弃编辑版改动，重新开始）
set -e
cd "$(dirname "$0")"

if [ "$1" = "pull" ]; then
  cp index.html data.js edit/
  rsync -a --delete assets/ edit/assets/
  echo "✅ 已用正式版重置编辑版"
  exit 0
fi

# 内容变了但版本号没改 → 提醒（玩家存档不会重置）
v_edit=$(grep -o "version:'[^']*'" edit/data.js | head -1)
v_prod=$(grep -o "version:'[^']*'" data.js | head -1)
if ! cmp -s edit/data.js data.js && [ "$v_edit" = "$v_prod" ]; then
  echo "⚠️  内容有改动但版本号没变（$v_edit），老玩家存档不会重置"
  read -p "继续发布？(y/N) " a
  [ "$a" = "y" ] || { echo "已取消"; exit 1; }
fi

cp edit/index.html edit/data.js .
rsync -a --delete edit/assets/ assets/

if [ -z "$(git status --porcelain)" ]; then
  echo "ℹ️  编辑版与正式版一致，无需发布"
  exit 0
fi

git add -A
git commit -m "release: 编辑版发布到正式版 ${v_edit}"
git push
echo "✅ 已发布，GitHub Pages 部署中（约30秒）"
