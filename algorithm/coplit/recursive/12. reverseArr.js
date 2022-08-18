// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.

function reverseArr(arr) {
  if (arr.length <= 1) return arr;

  return reverseArr(arr.slice(1)).concat([arr[0]]);
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
