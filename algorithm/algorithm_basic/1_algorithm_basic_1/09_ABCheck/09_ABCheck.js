// 문제
// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열



function ABCheck(str) {
  str = str.toLowerCase();

  let isEqual = false;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a' && str[i + 4] === 'b') isEqual = true;
    else if(str[i] === 'b' && str[i + 4] === 'a') isEqual = true;
  }
  return isEqual;
}



// 입출력 예시
let output = ABCheck('lane Borrowed');
console.log(output); // --> true