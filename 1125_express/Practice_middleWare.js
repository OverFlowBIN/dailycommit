var express = require('express');
var app = express();



//! 마운트 경로가 없는 미들웨어 함수가 표시되어 있습니다. 이 함수는 앱이 요청을 수신할 때마다 실행됩니다.
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


//! /user/:id 경로에 마운트되는 미들웨어 함수가 표시되어 있습니다. 
//! 이 함수는 /user/:id 경로에 대한 모든 유형의 HTTP 요청에 대해 실행됩니다.
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});


//! 라우트 및 해당 라우트의 핸들러 함수(미들웨어 시스템)이 표시되어 있습니다. 
//! 이 함수는 /user/:id 경로에 대한 GET 요청을 처리합니다.
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});


//! 하나의 마운트 경로를 통해 일련의 미들웨어 함수를 하나의 마운트 위치에 로드하는 예가 표시되어 있습니다. 
//! 이 예는 /user/:id 경로에 대한 모든 유형의 HTTP 요청에 대한 요청 정보를 인쇄하는 미들웨어 하위 스택을 나타냅니다.
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

//! /user/:id 경로에 대한 GET 요청을 처리하는 미들웨어 하위 스택이 표시되어 있습니다.
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});


//! /user/:id 경로에 대한 GET 요청을 처리하는 미들웨어 하위 스택이 표시되어 있습니다.
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});

