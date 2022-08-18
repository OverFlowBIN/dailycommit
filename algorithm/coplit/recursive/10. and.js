// 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.

function and(arr) {
  if (arr.length <= 1) return arr[0];

  return arr[0] && and(arr.slice(1));
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false
