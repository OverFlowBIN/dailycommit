// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.

const computeAverageOfNumbers = (arr) => {
  return arr.reduce((pre, cur, idx) => pre + cur) / arr.length;
};

let output = computeAverageOfNumbers([4, 5, 6]);
console.log(output); // --> 5
