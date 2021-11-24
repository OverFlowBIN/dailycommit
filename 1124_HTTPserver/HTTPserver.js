const http = require('http')


//! hello world를 응답해주는 서버 생성

const server = http.createServer((requset, response) => {
  response.write('hello world');
  response.end();
});

// 또는
// const server = http.createServer();
// server.on('request', (req, res) => {
//   res.write('hello world');
//   res.end();
// });

server.listen(3000);

test!

