// 문제
// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.
// 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것으로 자연수를 만들면
// 1205가 된다.


// solve.1
function solution(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) result += str[i];
  }
  return parseInt(result);
}



// 입출력 예시
let str = "g0en2T0s8eSoft";
let output = solution(str);
console.log(output);  // --> 208