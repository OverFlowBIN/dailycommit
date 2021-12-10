const express = require('express');
const app = express();
const port = 3000;

const jsonParser = express.json({strict: false});


const myLogger = (req, res, next) => {
  console.log('Logged')
  console.log(req.method, req.url)
  next();
}

// 어떤 methode로 요청을 보내든 use는 실행된다
app.use(myLogger);
// 
app.use(jsonParser);


app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/lower', (req, res) => {
  // console.log(req.body);
  res.send('/lower req.body?? check console')
  res.send(req.body.toLowerCase())
})


app.post('/upper', (req, res) => {
  // console.log(req.body);
  res.send('/upper req.body?? check console')
  res.send(req.body.toUpperCase())
})


// http://localhost:3000/flight/123/?q=hello 요청 시 id는 : 123 id.query는 hello 출력
app.get('/flight/:id', (req, res) => {
  res.send(`id는 : ${req.params.id} id.query는 ${req.query.q} 입니다`)
})


app.listen(port, () => {
  console.log(`Example app listending at http://localhost:${port}`);
})