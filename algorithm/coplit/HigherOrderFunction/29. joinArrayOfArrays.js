// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는

const joinArrayOfArrays = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
};

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y
