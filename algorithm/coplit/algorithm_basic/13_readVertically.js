// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 주의사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

// 수도코드
//  ['ABCDE', 'abcde', 'fghij']
//        A        a          f         B        b         g
//  arr[0][0] arr[1][0] arr[2][0] arr[0][1] arr[1][1] arr[2][1]

//solve.1
function readVertically1(arr) {
  let result = "";
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (maxLen < arr[i].length) maxLen = arr[i].length;
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) result += arr[j][i];
      else continue;
    }
  }

  return result;
}

//solve.1-1
function readVertically11(arr) {
  let result = "";
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (maxLen < arr[i].length) maxLen = arr[i].length;
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) result += arr[j][i];
      else continue;
    }
  }

  return result;
}

// solve.2
function readVertically2(arr) {
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (maxLength < arr[i].length) {
      maxLength = arr[i].length;
    }
  }

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === undefined) {
        continue;
      }
      result += arr[j][i];
    }
  }

  return result;
}

// solve.3
function readVertically3(arr) {
  let itemLength = arr[0].length; // itemLength를 배열의 첫 번째 요소의 길이로 설정한다.
  let newString = "";
  arr.forEach((item) => {
    if (item.length > itemLength) {
      // itemLength보다 더 긴
      itemLength = item.length; // 배열의 요소가 있으면 그 길이가 itemLength가 된다.
    }
  });

  for (let i = 0; i < itemLength; i++) {
    let part = "";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === undefined) {
        // 가장 긴 배열의 요소보다 짧은 요소의 빈 부분은 ''가 된다.
        part += "";
      } else {
        part += arr[j][i];
      }
    }
    newString += part;
  }
  return newString;
}

// solve.4
function readVertically4(arr) {
  let result = "";
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxLen) {
      maxLen = arr[i].length;
    }
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) result += arr[j][i];
    }
  }

  return result;
}

// 입출력 예시
console.time("readVertically1");
let input1 = ["hello", "wolrd"];
let output1 = readVertically1(input1);
console.log(output1); // --> 'hweolllrod'
console.timeEnd("readVertically1");

console.time("readVertically11");
let input11 = ["hello", "wolrd"];
let output11 = readVertically11(input1);
console.log(output11); // --> 'hweolllrod'
console.timeEnd("readVertically11");

input1 = ["hi", "wolrd"];
output1 = readVertically1(input1);
console.log(output1); // --> 'hwiolrd'

// 입출력 예시
console.time("readVertically2");
let input2 = ["hello", "wolrd"];
let output2 = readVertically2(input2);
console.log(output2); // --> 'hweolllrod'
console.timeEnd("readVertically2");

input2 = ["hi", "wolrd"];
output2 = readVertically2(input2);
console.log(output2); // --> 'hwiolrd'

// 입출력 예시
console.time("readVertically3");
let input3 = ["hello", "wolrd"];
let output3 = readVertically3(input3);
console.log(output3); // --> 'hweolllrod'
console.timeEnd("readVertically3");

input3 = ["hi", "wolrd"];
output3 = readVertically3(input3);
console.log(output3); // --> 'hwiolrd'

// 입출력 예시
console.time("readVertically4");
let input4 = ["hello", "wolrd"];
let output = readVertically4(input4);
console.log(output); // --> 'hweolllrod'
console.timeEnd("readVertically4");

input4 = ["hi", "wolrd"];
output = readVertically4(input4);
console.log(output); // --> 'hwiolrd'
