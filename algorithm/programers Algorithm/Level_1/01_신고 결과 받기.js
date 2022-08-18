function solution(id_list, report, k) {
  let answer = [];

  // 중복 미리 삭제
  let Report = [report[0]];
  for (let i = 1; i < report.length; i++) {
    if (!Report.includes(report[i])) Report.push(report[i]);
  }

  // 개인별 신고당한 횟수 확인하기
  for (let i = 0; i < id_list.length; i++) {}

  return answer;
}



// solve.2
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}

// solve.3
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}

// solve.4
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(v => {
      return v.split(' ');
  });
  let counts = new Map();

  for (const bad of reports){
      counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  let mails = new Map();

  for (const report of reports) {
      if(counts.get(report[1]) >= k){
          mails.set(report[0], mails.get(report[0]) + 1 || 1);
      }
  }
  let answer = id_list.map(a => mails.get(a) || 0);
  return answer;
}