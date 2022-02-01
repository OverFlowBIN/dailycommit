// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 
// 제거한 배열을 리턴해야 합니다.



// solve.1
function removeExtremes(arr) {
  
  let max = arr[0]
  let min = arr[0]
  let maxIdx = 0;
  let minIdx = 0;

  for(let i = 1; i < arr.length; i++) {
    if(arr[i].length >= max.length) {
      max = arr[i]
      maxIdx = i
    }
    if(arr[i].length <= min.length) {
      min = arr[i]
      minIdx = i
    }
  }

  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(i !== minIdx && i !== maxIdx) {
      result.push(arr[i])
    }
  }
  return result;
}



// solve.2
function removeExtremes(arr) {
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



// 입출력 예시
let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]