// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

// function firstCharacter(str) {
//   if(str === '') return '';
//   let split = str.split(' ');
//   let result = '';

//   for(let el of split) {
//     result += el[0];
//   }

//   return result;
// }

function firstCharacter(str) {
  let result = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i + 1];
    }
  }
  return result;
}

// 입출력 예시
let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"
