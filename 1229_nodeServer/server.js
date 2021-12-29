const http = require('http')
// http는 내장 모듈이다

const port = 8080;

// 서버 객체 띄우기
const server = http.createServer();

// 포트 지정해주기  
server.listen(port);

// 서버객체.on -> 이벤트들을 처리 할 수 있다.
server.on('listening', () => {
  console.log(`listen on ${port}!`)
})


//! request 처리하기
server.on('request', (req, res) => {
  // 요청 헤더 콘솔 찍기
  //* console.log(req.headers);

  // request 메소드 설정 및 콘솔 찍기
  const { headers, method, url } = req;
  const userAgent = headers['user-agent'];
  //* console.log(`method: ${method}`);
  //* console.log(`userAgent: ${userAgent}`);
  //* console.log(`url: ${url}`);

  //! POST 요청 처리하기
  let body = [];
  // 에러가 발샐할 때 이벤트 처리
  req.on('error', (err) => {
    console.log(err);
    // 데이터가 처리될때 이벤트 처리
  }).on('data', (chunk) => {
    body.push(chunk);
    // 응답이 끝날때 이벤트 처리
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
  })
  

  // 응답할 내용 보내기
  res.write('<h1>Node Server</h1>');

  // 응답 끝내기
  res.end();
})

