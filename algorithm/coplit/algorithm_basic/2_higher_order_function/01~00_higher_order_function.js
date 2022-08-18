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
// -----------------------------------------------------------------------------------------------------------------------

// 문제 8
// 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// arr.map 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


// solve.1
function mapCallback(func, arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]))
  }
  return result;
}

// solve.2
function mapCallback(func, arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i])
  }
  return arr;
}


// 입출력 예시
function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

let output8 = mapCallback(square, [2, 4, 7]);
console.log('문제8 \n', output8); // --> [4, 16, 49]

output8 = mapCallback(mul10, [2, 4, 7]);
console.log(output8); // --> [20, 40, 70]

output8 = mapCallback(square, []);
console.log(output8); // --> []
// -----------------------------------------------------------------------------------------------------------------------

// 문제 9
// 함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// arr.filter 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


// solve.1
function filterCallback(func, arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) result.push(arr[i])
  }
  return result;
}


// 입출력 예시
function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

let output9 = filterCallback(isOdd, [1, 2, 3, 4]);
console.log('문제9 \n',output9); // --> [1, 3]

output9 = filterCallback(isEven, [1, 2, 3, 4]);
console.log(output9); // --> [2, 4]
// -----------------------------------------------------------------------------------------------------------------------

// 문제 10
// 배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
// 반드시 arr.filter를 이용해서 풀어야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


// solve.1
function removeElement(arr, num) {
  return arr.filter(el => el !== num)
}


// 입출력 예시
let output10 = removeElement([1, 2, 3, 2, 1], 2);
console.log('문제10 \n', output10); // --> [1, 3, 1]
// -----------------------------------------------------------------------------------------------------------------------

// 문제 11
// 배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
// 반드시 arr.filter를 이용해서 풀어야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// keeper와 일치하는 요소가 없는 경우, 빈 배열을 리턴해야 합니다.


// solve.1
function keep(arr, num) {
  return arr.filter(el => el === num);
}


// 입출력 예시
let output11 = keep([1, 2, 3, 2, 1], 2)
console.log('문제11 \n', output11); // --> [2, 2]
// -----------------------------------------------------------------------------------------------------------------------

// 문제 12
// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
// 반드시 arr.filter를 이용해서 풀어야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


// solve.1
function filterOddLengthWords(arr) {
  return arr.filter(el => el.length % 2 === 1)
}


// 입출력 예시
let output12 = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log('문제12 \n', output12); // --> ['there', "now']
// -----------------------------------------------------------------------------------------------------------------------

// 문제 13
// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.sort, arr.indexOf 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// num은 arr의 어떤 요소와도 같지 않다고 가정합니다.


// solve.1
function getIndex(arr, num) {
  return arr.filter(el => {
    return el < num
  }).length;
}

// solve.2
function getIndex(arr, num) {
  return arr.filter(el => el < num).length;  // 리턴할 값이 한줄이면 중괄호와 return을 생략할 수 있다.
}


// 입출력 예시
let output13 = getIndex([5, 4, 1, 3], 2);
console.log('문제13 \n', output13); // --> 1

output13 = getIndex([10, 5, 1, 3], 13);
console.log(output13); // --> 4
// -----------------------------------------------------------------------------------------------------------------------

// 문제 14
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 대소 비교는 number 타입에만 적용합니다.
// 주어진 키에 해당하는 값이 배열이고, 100 미만인 요소가 있는 경우에만 해당 요소를 갖는 배열을 리턴해야 합니다.
// 그 외의 경우, 빈 배열을 리턴해야 합니다.
// 주어진 보조 함수(lessThan100)를 사용해야 합니다.



// solve.1
function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  return obj[property].filter(function(el) {
    return lessThan100(el)
  })
}


// solve.2 - 주의사항 
function getElementsLessThan100AtProperty(obj, property) {
  let arr = obj[property];
  if (Array.isArray(obj[property])) {
    return arr.filter(function (el) {
    return typeof el === 'number' && lessThan100(el)
    })
  }
  return []; 
}


// 입출력 예시
const obj = {
  key: [1000, 20, 50, 500],
};

let output14 = getElementsLessThan100AtProperty(obj, 'key');
console.log('문제14 \n',output14); // --> [20, 50]
// -----------------------------------------------------------------------------------------------------------------------

// 문제 15
// 

// 주의 사항



// solve.1



// 입출력 예시

// -----------------------------------------------------------------------------------------------------------------------

// 문제 16
// 

// 주의 사항



// solve.1



// 입출력 예시

// -----------------------------------------------------------------------------------------------------------------------

// 문제 17
// 

// 주의 사항



// solve.1



// 입출력 예시

// -----------------------------------------------------------------------------------------------------------------------

// 문제 18
// 

// 주의 사항



// solve.1



// 입출력 예시

// -----------------------------------------------------------------------------------------------------------------------

// 문제 19
// 

// 주의 사항



// solve.1



// 입출력 예시

// -----------------------------------------------------------------------------------------------------------------------
// 문제 20

// -----------------------------------------------------------------------------------------------------------------------
// 문제 21
// 문제 22
// 문제 23
// 문제 24
// 문제 25
// 문제 26
// 문제 27
// 문제 28
// 문제 29
// 문제 30
// 문제 31
// 문제 32






