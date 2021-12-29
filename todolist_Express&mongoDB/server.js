const { application } = require('express');
const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`listening on ${port}`)
});

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
});

app.get('/pet', (req, res)=>{
  res.send('펫용품 쇼핑할 수 있는 페이지 입니다.')  
});

app.get('/beauty', (req, res)=>{
  res.send('뷰티용품을 쇼핑할 수 있는 페이지 입니다.')  
});

