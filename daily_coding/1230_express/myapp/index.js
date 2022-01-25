const express = require('express');
const app = express();
const port = 3030;



const myLogger = function (req, res, next) {
  console.log('LOGGED'); // 이 부분을 req, res 객체를 이용해 고치면, 여러분들은 모든 요청에 대한 로그를 찍을 수 있습니다.
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
