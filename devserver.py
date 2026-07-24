#!/usr/bin/env python3
# 岗位合成器本地开发服务器：静态文件 + 编辑版图片上传
# 用法: python3 devserver.py [端口]   （默认 8765，仅监听本机）
import http.server, os, re, sys, urllib.parse

ROOT = os.path.dirname(os.path.abspath(__file__))

class H(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if not self.path.startswith('/upload'):
            self.send_error(404); return
        q = urllib.parse.urlparse(self.path)
        p = urllib.parse.parse_qs(q.query).get('path', [''])[0]
        # 只允许写 edit/assets/{items,jobs,rooms}/ 下的 png，文件名不许带路径符
        if not re.fullmatch(r'(items|jobs|rooms)/[^/\\]{1,80}\.png', p):
            self.send_error(400, 'bad path'); return
        n = int(self.headers.get('Content-Length', 0))
        if n <= 0 or n > 5 * 1024 * 1024:
            self.send_error(400, 'bad size'); return
        data = self.rfile.read(n)
        dst = os.path.join(ROOT, 'edit', 'assets', p)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        with open(dst, 'wb') as f:
            f.write(data)
        # 首次上传自动打开编辑版的图片开关
        dj = os.path.join(ROOT, 'edit', 'data.js')
        try:
            s = open(dj, encoding='utf-8').read()
            if 'useImages:false' in s:
                open(dj, 'w', encoding='utf-8').write(s.replace('useImages:false', 'useImages:true', 1))
        except OSError:
            pass
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"ok":true}')

    def log_message(self, *a):
        pass

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
os.chdir(ROOT)
print(f'岗位合成器开发服务器: http://localhost:{port}/')
print(f'编辑版(支持图片上传): http://localhost:{port}/edit/index.html?edit=1')
http.server.ThreadingHTTPServer(('127.0.0.1', port), H).serve_forever()
