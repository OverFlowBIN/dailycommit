// 문제
// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 
// 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.


// solve.1
function isIsogram(str) {
  str = str.toLowerCase();
  let preStr = str[0];
  for(let i = 1; i < str.length; i++) {
    if(preStr.includes(str[i])) return false;
    else preStr += str[i];
  }
  return true;
}



// 입출력 예시
let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false