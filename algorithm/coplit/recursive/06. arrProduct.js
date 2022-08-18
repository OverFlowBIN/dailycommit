// 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.

function arrProduct(arr) {
  if (!arr.length) return 1;

  return arr[0] * arrProduct(arr.slice(1));
}

let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6
