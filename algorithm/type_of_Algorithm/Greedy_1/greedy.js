// solve.1
function movingStuff(stuff, limit) {
  stuff.sort((a, b) => b - a);
  // stuff를 반복문을 돌린다 
  // 맨처음을 arr에 넣고 맨앞 요소 삭제
    // 만약 맨뒤를 넣었을때 들어간다면 넣고 맨뒤 요소 삭제 
    // 아니면 넣지 않기
    // 카운트 업하기
  // return count;
  
  let arr = []
  while(stuff.length > 0) {
    if(stuff[0] + stuff[stuff.length - 1] <= limit) {
      arr.push([stuff.shift(), stuff.pop()])
    }
    else {
      arr.push([stuff.shift()])
    }
  }
  console.log(arr)
  return arr.length;
}


let output2 = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output2); // 4