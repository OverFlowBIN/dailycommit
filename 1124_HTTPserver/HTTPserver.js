const http = require('http')

// const server = http.createServer();
// server.on('request', (req, res) => {
//   res.write('hello world');
//   res.end();
// });

const server = http.createServer((requset, response) => {
  response.write('hello world');
  response.end();
})



server.listen(3000);

