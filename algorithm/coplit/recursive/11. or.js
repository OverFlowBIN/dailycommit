// 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.

function or(arr) {
  if (arr.length <= 1) return arr[0];

  return arr[0] || or(arr.slice(1));
}

let output = or([true, true, false]);
console.log(output); // --> true

output = or([false, false, false]);
console.log(output); // --> false
