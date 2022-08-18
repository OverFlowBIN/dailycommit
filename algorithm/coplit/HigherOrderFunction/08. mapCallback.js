// 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.

const mapCallback = (callback, arr) => {
  let result = [];
  for (el of arr) result.push(callback(el));
  return result;
};

function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

let output = mapCallback(square, [2, 4, 7]);
console.log(output); // --> [4, 16, 49]

output = mapCallback(mul10, [2, 4, 7]);
console.log(output); // --> [20, 40, 70]

output = mapCallback(square, []);
console.log(output); // --> []
