// 문제 1
// 'Hello HoF!' 리턴하는 함수를 리턴해야 합니다.


// solve.1
function returnFunction() {
  return function () {
    return "Hello HoF"
  }
}


// 입출력 예시
let output1 = returnFunction();
console.log('문제1\n',output1); // --> function 자체를 보여줌
console.log(output1()); // --> 'Hello HoF!'
// -----------------------------------------------------------------------------------


// 문제 2
// 함수와 수(num)를 입력받아 num에 함수를 적용(apply)한 결과를 리턴해라.


// solve.1
function functionParameter(func, num) {
  return func(num);
}


// 입출력 예시
function square(num) {
  return num * num;
}

let output2 = functionParameter(square, 2);
console.log('문제2\n',output2); // --> 4

function add5(num) {
  return num + 5;
}

output2 = functionParameter(add5, 3);
console.log(output2); // --> 8
// --------------------------------------------------------------------------------------------------


// 문제 3
// 함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴해라


// solve.1
function applyTwice(func, num) {
  return func(func(num))
}


// 입출력 예시
function square(num) {
  return num * num;
}

let output3 = applyTwice(square, 2);
console.log('문제3\n',output3); // --> 16

function add5(num) {
  return num + 5;
}

output3 = applyTwice(add5, 3);
console.log(output3); // --> 13
// ----------------------------------------------------------------------------------------------------


// 문제 4
// 두 개의 함수와 수(num)를 입력받아 num에 함수들을 num에 가까운 순서대로 적용한 결과를 리턴해야 합니다.


// solve.1
function compose(func1, func2, num) {
  return func1(func2(num));
}


// 입출력 예시
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = compose(add5, square, 2);
console.log('문제4\n',output); // --> 9

output = compose(square, add5, 2);
console.log(output); // --> 49

output = compose(isOdd, add5, 2);
console.log(output); // --> true
// ----------------------------------------------------------------------------------------------------


// 문제 5
// 두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다.


// solve.1
function compose2(func1, func2) {
  return function (num) {
    return func1(func2(num))
  }
}


// 입출력 예시
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output5 = compose2(add5, square);
console.log('문제5\n',output5(4)); // --> 21

output5 = compose2(square, add5);
console.log(output5(4)); // --> 81

output5 = compose2(isOdd, add5);
console.log(output5(4)); // --> true
// ------------------------------------------------------------------------------------------------------


// 문제 6
// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.


// solve.1
function pipe(...func) {
  return function(num) {
    let result = num;
    for(let el of func) {
      result = el(result)
    }
    return result;
  }
}



// 입출력 예시
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function mul3(num) {
  return num * 3;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output6 = pipe(add5, square);
console.log('문제6 \n', output6(4)); // --> 81

output6 = pipe(square, add5, mul3);
console.log(output6(4)); // --> 63

output6 = pipe(square, mul3, add5, add5, isOdd);
console.log(output6(4)); // --> false
// -------------------------------------------------------------------------------------------------------------------

// 문제 7
// 함수와 객체를 입력받아 조건별로 아래와 같은 동작을 수행해야 합니다.
// 1. 객체의 'status' 속성값이 'fail'인 경우, 'Something went wrong!'을 리턴해야 합니다.
// 2. 객체의 'status' 속성값이 'success'인 경우, 'data' 속성값에 입력받은 함수를 적용한 결과를 리턴해야 합니다.


// solve.1
function callbackOnly(callback, response) {
  if(response.status === 'fail') return 'Something went wrong!'
  else return callback(response.data);
}


// 입출력 예제
function getDomain(email) {
  return email.split('@')[1].split('.')[0];
}

function getUserId(email) {
  return email.split('@')[0];
}

let output7 = callbackOnly(getDomain, {
  status: 'success',
  data: 'mike@codestates.com',
});
console.log('문제7 \n', output7); // --> codestate

output7 = callbackOnly(getUserId, {
  status: 'success',
  data: 'mike@codestates.com',
});
console.log(output7); // --> mike

output7 = callbackOnly(getUserId, {
  status: 'fail',
  data: 'mike@codestates.com',
});
console.log(output7); // --> 'Something went wrong!'
