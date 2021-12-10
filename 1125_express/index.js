const express = require('express')
const app = express()
const port = 3000
const birds = require('./birds');

app.get('/', (req, res) => {
  res.send('GET request to the hompage')
})

app.post('/', (req, res) => {
  res.send('POST request to the hompage')
})

app.get('/first', (req, res) => {
  res.send('first page')
})

//! all ??
// app.all('/secret', (req, res, next) => {
//   console.log('secret??');
//   next();
// })

//! 경로에 - or . 은 경로 문자열에 취급이 됨. ? + * ( ) 마다 방식이 다르다
  // ?, +, * 및 () 문자는 정규식 문자의 서브세트입니다. 하이픈(-) 및 점(.)은 문자열 기반 경로에 의해 문자 그대로 해석됩니다.

// 다음의 라우트 경로는 acd 및 abcd와 일치합니다 -> 물음표는 생략가능
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
// 다음의 라우트 경로는 abcd, abbcd 및 abbbcd 등과 일치합니다.
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});
// 다음의 라우트 경로는 abcd, abxcd, abRABDOMcd 및 ab123cd 등과 일치합니다.
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});
// 다음의 라우트 경로는 /abe 및 /abcde와 일치합니다.
app.get('/ab(cd)?e', function(req, res) {
  res.send('ab(cd)?e');
 });

// 다음의 라우트 경로는 라우트 이름에 “a”가 포함된 모든 항목과 일치합니다.
// app.get(/a/, function(req, res) {
//   res.send('/a/');
// });
// // 다음의 라우트 경로는 butterfly 및 dragonfly와 일치하지만, butterflyman 및 dragonfly man 등과 일치하지 않습니다.
// app.get(/.*fly$/, function(req, res) {
//   res.send('/.*fly$/');
// });

//! 2개 이상의 콜백 함수는 하나의 라우트를 처리할 수 있습니다(next 오브젝트를 반드시 지정해야 함). 예를 들면 다음과 같습니다.
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


//! 하나의 콜백 함수 배열은 하나의 라우트를 처리할 수 있습니다. 예를 들면 다음과 같습니다.
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);


//! 독립적인 함수와 함수 배열의 조합은 하나의 라우트를 처리할 수 있습니다.
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


//! app.route() -> 하나의 루트에 여러 메소드 사용 가능
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

//! express.Router()
app.use('/birds', birds);





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
