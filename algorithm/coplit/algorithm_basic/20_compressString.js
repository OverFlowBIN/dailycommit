// 문제
// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴하라.

// 주의사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

// pesudocode
// 반복문으로 str을 돌면서 문자를 temp(string)에 넣는다.
// 다음 문자를 확인 했을때 temp의 문자와 같다면
// 해당 문자를 또 temp에 추가시킨다.
// 다음수를 확인 했을때 temp의 문자와 다르다면
// temp.length가 3이 넘는다면
// temp.length를 result에 넣는다
// temp를 빈문자로 초기화시킨다.
// temp.length가 2 이하라면
// temp를 result에 넣는다.
// temp를 빈문자로 초기화시킨다.
// 여기서 마지막은 넣을떄 다음 글자가 없기 떄문에 반복문 조건을 i <= str.length로 바꾸어
// 한번더 돌게하는 방법으로 마무리 한다. (좋은 코딩법은 아닌것 같다.)

// solve.1
function compressString1(str) {
  let result = "";
  let temp = str[0];
  for (let i = 1; i <= str.length; i++) {
    if (temp.includes(str[i])) {
      temp += str[i];
    } else {
      if (temp.length > 2) {
        result += temp.length + str[i - 1];
        temp = str[i];
      } else {
        result += temp;
        temp = str[i];
      }
    }
  }

  return result;
}

// solve.2 (reference)
function compressString2(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = "";

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + " ";
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}

// solve.3
function compressString3(str) {
  let result = "";
  let preStr = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (preStr.includes(str[i])) preStr += str[i];
    else {
      if (preStr.length >= 3) {
        result += preStr.length + preStr[0];
        preStr = str[i];
      } else {
        result += preStr;
        preStr = str[i];
      }
    }
  }
  return result;
}

// 입출력 예시
let output = compressString1("abc");
console.log(output); // --> abc

console.time("compressString1");
output = compressString1("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
console.timeEnd("compressString1");

console.time("compressString2");
output = compressString2("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
console.timeEnd("compressString2");

console.time("compressString3");
output = compressString3("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
console.timeEnd("compressString3");

// for(let el of str) {
//   if(!temp) temp = el;
//   else if(temp && temp.includes(el)) temp += el;
//   else if(temp && !temp.includes(el)) {
//     if(temp.length >= 3) {
//       result = result + temp.length;
//       temp = '';
//     } else if(temp.length < 3) {
//       result = result + temp;
//       temp = '';
//     }
//   }
// }
