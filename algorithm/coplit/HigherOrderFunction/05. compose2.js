// 두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다.

function compose2(callback1, callback2, num) {
  return function (num) {
    return callback1(callback2(num));
  };
}

function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = compose2(add5, square);
console.log(output(4)); // --> 21

output = compose2(square, add5);
console.log(output(4)); // --> 81

output = compose2(isOdd, add5);
console.log(output(4)); // --> true
