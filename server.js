const http = require('http'); // HTTP 서버 생성을 위한 모듈
const fs = require('fs');     // 파일 시스템 접근을 위한 모듈
const path = require('path'); // 파일 경로 관리를 위한 모듈


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('서버 오류: index.html 파일을 읽을 수 없습니다.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    // 루트 URL이 아닌 다른 경로로 요청이 오면,
    // 404 Not Found 응답을 보냅니다.
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('페이지를 찾을 수 없습니다.');
  }
});


const PORT = 8080;
server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
  console.log('브라우저에서 위 주소로 접속하세요.');
  console.log('서버를 종료하려면 Ctrl + C를 누르세요.');
});
