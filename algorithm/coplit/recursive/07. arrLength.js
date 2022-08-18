// 배열을 입력받아 그 길이를 리턴해야 합니다.

function isEmpty(arr) {
  if (arr.length) return false;
  else return true;
}

function arrLength(arr) {
  if (isEmpty(arr)) return 0;

  return 1 + arrLength(arr.slice(1));
}

let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4
