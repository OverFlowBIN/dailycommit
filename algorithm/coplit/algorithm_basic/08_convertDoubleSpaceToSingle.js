// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// solve.1
function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}

// solve.2
function convertDoubleSpaceToSingle(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] === " ") {
      result += "";
    } else {
      result += str[i];
    }
  }

  return result;
}

function convertDoubleSpaceToSingle(str) {}

// 입출력 예시
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
