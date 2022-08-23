// 문제
// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다.
// 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

// solve.1
function isIsogram1(str) {
  str = str.toLowerCase();
  let preStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (preStr.includes(str[i])) return false;
    else preStr += str[i];
  }
  return true;
}

// solve.2
function isIsogram2(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) return false;
    }
  }
  return true;
}

// solve.3
function isIsogram3(str) {
  if (str.length === 0) {
    return true;
  }

  let cache = {};
  let strLowered = str.toLowerCase();

  for (let i = 0; i < strLowered.length; i++) {
    if (cache[strLowered[i]]) {
      return false;
    }
    cache[strLowered[i]] = true;
  }

  return true;
}

// 입출력 예시

let output1 = isIsogram1("aba");
console.log(output1); // false

console.time("isIsogram1");
output1 = isIsogram1("Dermatoglyphics");
console.log(output1); // true
console.timeEnd("isIsogram1");

output1 = isIsogram1("moOse");
console.log(output1); // false

// 입출력 예시
let output2 = isIsogram2("aba");
console.log(output2); // false

console.time("isIsogram2");
output2 = isIsogram2("Dermatoglyphics");
console.log(output2); // true
console.timeEnd("isIsogram2");

output2 = isIsogram2("moOse");
console.log(output2); // false

// 입출력 예시
let output3 = isIsogram3("aba");
console.log(output3); // false

console.time("isIsogram3");
output3 = isIsogram3("Dermatoglyphics");
console.log(output3); // true
console.timeEnd("isIsogram3");

output3 = isIsogram3("moOse");
console.log(output3); // false
