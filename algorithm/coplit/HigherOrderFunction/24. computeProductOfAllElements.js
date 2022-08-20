// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴해야 합니다.
// arr.reduce 사용

const computeProductOfAllElements = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre * cur;
  });
};

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
