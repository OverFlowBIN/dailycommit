let village = [
    '1001212',
    '1201011',
    '1102001',
    '2111102',
    '0012111',
    '1111101',
    '2121102',
  ];

let createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};


let rumorMap=createMatrix(village);
// 0: (7) ['1', '0', '0', '1', '2', '1', '2']
// 1: (7) ['1', '2', '0', '1', '0', '1', '1']
// 2: (7) ['1', '1', '0', '2', '0', '0', '1']
// 3: (7) ['2', '1', '1', '1', '1', '0', '2']
// 4: (7) ['0', '0', '1', '2', '1', '1', '1']
// 5: (7) ['1', '1', '1', '1', '1', '0', '1']
// 6: (7) ['2', '1', '2', '1', '1', '0', '2']


const memoMaker=()=>Array(rumorMap.length).fill(0).map((x,i)=>Array(rumorMap[0].length).fill(0));
const deepCopy=(arr2D)=>JSON.parse(JSON.stringify(arr2D))

function fourDirectionCheck(arr,agentIdx,level){
  // let nextQue=[]
  let i=parseInt(agentIdx/arr.length)
  let j=agentIdx%arr.length
  if(i+1<arr.length&& (arr[i+1][j]===('1')||arr[i+1][j]===('2'))){
    arr[i+1][j]=level
    // nextQue.push(agentIdx+arr.length)
  }
  if(j+1<arr.length&& (arr[i][j+1]===('1')||arr[i][j+1]===('2'))){
    arr[i][j+1]=level
    // nextQue.push(agentIdx+1)
  }
  if(i>0&& (arr[i-1][j]===('1')||arr[i-1][j]===('2'))){
    arr[i-1][j]=level
    // nextQue.push(agentIdx-arr.length)
  }
  if(j>0&& (arr[i][j-1]===('1')||arr[i][j-1]===('2'))){
    arr[i][j-1]=level
    // nextQue.push(agentIdx-1)
  }
}

function spreadRumor(rumorMap, agentIdx,level=0){
  if(level===0)rumorMap[parseInt(agentIdx/rumorMap.length)][agentIdx%rumorMap.length]=0;
  let que=[]
  for(let idx=0;idx<rumorMap.length**2;){
    let temp=[].concat(...rumorMap).indexOf(level,idx);
    if(temp>-1){
      que.push(temp)
      idx=temp+1
    }else break
  }
  if(que.length)
  for(let idx of que)
    fourDirectionCheck(rumorMap,idx,level+1)
  
  else return //console.log('done')
  
  spreadRumor(rumorMap, agentIdx,level+1)
}

function endGame(rumorMap){
  // this.endGame.asdf=1
  // console.log(this.endGame.asdf)
  let agentQue=[]
  let agentMap=[]
  for(let idx=0;idx<rumorMap.length**2;){
    let temp=[].concat(...rumorMap).indexOf('2',idx)
    if(temp===-1)break
    agentQue.push(temp)
    agentMap.push([])
    idx=temp+1
  }
  console.log(agentQue)
  for(let i=0;i<agentQue.length;i++){
    let temp=deepCopy(rumorMap)
    spreadRumor(temp,agentQue[i])
    agentMap[i]=temp
  }
  console.log(agentMap)
}


console.log(endGame(rumorMap))