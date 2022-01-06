
//? 변수로 정의된 모듈 호출
const { SEND_MAIN_PING } = require('./constants');
console.log(SEND_MAIN_PING);


//? function으로 정의된 호출
//* const sum = require('./module/sum');
//* console.log(sum(2,3));


//? folder로 정의된 호출
const myModule = require('./module');  //! 폴터 자체를 require한다
console.log(myModule.sum(1,2));
console.log(myModule.minus(3,1));


//? Codr Module
const http = require('http');


//? 외부 모듈(npm)
// npm install express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(3030, ()=>{ console.log('listening on 3030')});



