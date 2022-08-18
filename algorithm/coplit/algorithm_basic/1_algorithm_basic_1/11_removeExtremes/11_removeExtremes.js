// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을
// 제거한 배열을 리턴해야 합니다.

// solve.1
function removeExtremes1(arr) {
  let max = arr[0];
  let min = arr[0];
  let maxIdx = 0;
  let minIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length >= max.length) {
      max = arr[i];
      maxIdx = i;
    }
    if (arr[i].length <= min.length) {
      min = arr[i];
      minIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== minIdx && i !== maxIdx) {
      result.push(arr[i]);
    }
  }
  return result;
}

// solve.2
function removeExtremes2(arr) {
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}

// solve.3
// 최소, 최대 길이를 확인, idx 확인, 해당 요소 삭제
function removeExtremes3(arr) {
  let short = arr[0];
  let long = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= short.length) {
      short = arr[i];
    }
  }

  arr.splice(arr.indexOf(short), 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= long.length) {
      long = arr[i];
    }
  }

  arr.splice(arr.indexOf(long), 1);
  return arr;
}

// 입출력 예시1
console.time("removeExtremes1");
let output1 = removeExtremes1(["a", "b", "c", "def"]);
console.log(output1); // --> ['a', 'b']
console.timeEnd("removeExtremes1");

output1 = removeExtremes1(["where", "is", "the", "longest", "word"]);
console.log(output1); // --> ['where', 'the', 'word',]

// 입출력 예시2
console.time("removeExtremes2");
let output2 = removeExtremes2(["a", "b", "c", "def"]);
console.log(output2); // --> ['a', 'b']
console.timeEnd("removeExtremes2");

output2 = removeExtremes2(["where", "is", "the", "longest", "word"]);
console.log(output2); // --> ['where', 'the', 'word',]

// 입출력 예시3
console.time("removeExtremes3");
let output3 = removeExtremes3(["a", "b", "c", "def"]);
console.log(output3); // --> ['a', 'b']
console.timeEnd("removeExtremes3");

output3 = removeExtremes3(["where", "is", "the", "longest", "word"]);
console.log(output3); // --> ['where', 'the', 'word',]
