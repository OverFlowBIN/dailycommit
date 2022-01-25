//! MiddleWare 비유 설명 인형 만들어줘
  // 컨베이어 벨트를 지나가며 
  // 중간 중간 인형의 형태를 만들어간다.
  // 중간 중간 불량품이 있으면 던져버린다
  // 이러한 중간 중간 역할을 하는 것을 middleWare에 비유할 수 있다.

//! MiddleWare를 사용하는 상황 4가지
  // 모든 요청에 대한 url이나 method를 확일할 때
  // POST 요청 등에 포함된 바디를 구조화(쉽게 얻고 싶을 때)
  // 모든 요청/응답에 CORS 헤더를 붙여야 할 때
  // 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때


const express = require('express');
const app = express();
const jsonParser = express.json({strict: false});
const cors = require('cors');

const port = 3030;

const myLogger = (req, res, next) => {
  console.log("LOGGED")
  console.log(req.method, req.url)
  next();  // 컨베이어 벨트 옆으로 안넘겨주는거다.. 꼭 써야된다.
}

//! response 헤더를 바꿔서 application/json으로 바꿀 수 도 있고
  // res.send.json() 으로 send를 보낼 수 도 있다.
    // res.type('json').send() 도 가능
    // 응답을 json으로 보내는 방법이다!!
  // 만약 응답을 text로 보내고 싶다면
    // res.type

//! end도 가능하지만 response에 data가 포함되어있으면 send로 보내야 한다.

app.use(cors());
// 모든 요청에 대해 CORS 요청을 한다.(core() 함수 실행을 넣어 줘야 한다.)
  //? 왜??
app.use(jsonParser);
// 모든 요청에 대한 jsonParser를 적용한다.
app.use(myLogger);
// 모든 요청에 대해 "LOGGED" 찍기

app.get('/', (req, res) => {
  res.send('Hello world')
})

// callback 형식으로 함수를 넣을 수있는게 장점.
app.post('/lower', (req, res) => {
  // 두번째 인자로 위에 가져온 jsonParser를 넣어준다.
    // body를 받기위해서!
  console.log(req.body) 
  // 아직은 받아올 수 없다. -> jsonParser를 이용해야한다(express에서는..)
  // text 형식을 받으려면 express.json({strict: false}); 옵션을 바꿔줘야한다.
  res.send(req.body.toLowerCase())
})

app.post('/upper', (req, res) => {
  res.send(req.body.toUpperCase())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})