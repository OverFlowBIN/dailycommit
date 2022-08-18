// 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

function arrSum(arr) {
  if (arr.length === 1) return arr[0];

  return arr[0] + arrSum(arr.slice(1));
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1
