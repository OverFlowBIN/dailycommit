// 함수와 수(num)를 입력받아 num에 함수를 적용(apply)한 결과를 리턴해야 합니다.

const functionParameter = (callback, num) => {
  return callback(num);
};

function square(num) {
  return num * num;
}

let output = functionParameter(square, 2);
console.log(output); // --> 4

function add5(num) {
  return num + 5;
}

output = functionParameter(add5, 3);
console.log(output); // --> 8
