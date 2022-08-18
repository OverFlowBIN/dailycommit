// 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴해야 합니다.

const getDoubledElements = (arr) => {
  return arr.map((el) => el * 2);
};

let output = getDoubledElements([1, 2, 3, 4]);
console.log(output); // --> [2, 4, 6, 8]
