// 문제
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에
// 몇개 존재하는지 알아내는 프로그램을 작성하시고
// 문자열의 길이는 100을 넘지 않습니다.



// solve.1
function solution(str, init) {
  
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === init) count++;
  }

  return count;
}


// solve.2
function solution(str, init) {
  return str.split(init).length - 1
}





// 입출력 예시
let str = 'computerprogramming'
let init = 'r'
let output = solution(str, init);
console.log(output);
