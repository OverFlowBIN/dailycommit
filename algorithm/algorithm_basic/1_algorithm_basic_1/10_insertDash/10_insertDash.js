// 문제
// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.



// solve.1
function insertDash(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] % 2 === 1 && str[i + 1] % 2 === 1) {
      result += str[i] + '-'
    } else {
      result += str[i]
    }
  }
  return result;
}



// solve.2
function insertDash(str) {
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
      result = result + '-';
    }
    result = result + str[i];
  }

  return result;
}



// 입출력 예시
let output = insertDash('454793');
console.log(output); // --> 4547-9-3