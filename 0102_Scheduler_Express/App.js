// node.js, Express를 이용한 sheduler 만들기
  // npm : node-schedule( https://www.npmjs.com/package/node-schedule )

const express = require('express');
const app = express();
const schedule = require('node-schedule')



app.get('/', (req, res) => {
  res.send('scheduler')
})

app.listen(3030, () => {
  console.log('Express start on port: 3030');
  schedule.scheduleJob('0 * * * * *', () => {
    // 현재 상태는 매 시간 중 0초일 때만 작업을 한다는것을 의미.

//     *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

    console.log('Running Schedule!' + new Date())
  });
})