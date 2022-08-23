// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

function convertListToObject(arr) {
  let obj = {};

  for (let el of arr) {
    // el.length가 0이아닌것 -> 빈객체만 있는건 무시하기
    // obj[해당키] ->
    // 해당 키에 대한 값이 이전에 없었다면 새로 객체에 넣어주고
    // 해당 키에 대한 값이 이전에 있었다면 무시하고 넘어가기
    if (el.length && !obj[el[0]]) {
      obj[el[0]] = el[1];
    }
  }

  return obj;
}

// solve.2
function convertListToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i][0]]) {
      obj[arr[i][0]] = arr[i][1];
    }
  }
  return obj;
}

// solve.3
function convertDoubleSpaceToSingle(str) {
  let result = "";
  let before = "";
  for (let i = 0; i < str.length; i++) {
    // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
    // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
    if (before !== " " || str[i] !== " ") {
      result = result + str[i];
    }
    before = str[i];
  }
  return result;
}

// 입출력 예시
const arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", "1964"],
  ["make", "Bill"],
];

let output = convertListToObject(arr);

console.log(output); // -->
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }
