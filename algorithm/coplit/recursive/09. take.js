// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

function take1(num, arr) {
  if (num >= arr.length) return arr;
  if (num <= 0) return arr;

  return take1(num - 1, arr.slice(0, arr.length - 1));
}

function take2(num, arr) {
  if (num >= arr.length) return arr;
  if (num <= 1) return arr[0];

  return [arr[0]].concat(take2(num - 1, arr.slice(1)));
}

let output = take1(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take1(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]

let output2 = take2(2, [1, -2, 1, 3]);
console.log(output2); // --> [1, -2]

output2 = take2(5, [1, -2, 1, 3]);
console.log(output2); // --> [1, -2, 1, 3]
