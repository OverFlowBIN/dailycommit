// 문제
// 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

function transformFirstAndLast(arr) {
  let obj = {};
  if (arr.length === 0) return obj;
  obj[arr[0]] = arr[arr.length - 1];
  return obj;
}

function test1(arr) {
  let obj = {};
  obj[arr[0]] = arr[arr.length - 1];
  return obj;
}

let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
let output1 = transformFirstAndLast(arr);
let output2 = test1(arr);
console.log(output1); // --> { Queen : 'Beyonce' }
console.log(output2); // --> { Queen : 'Beyonce' }
