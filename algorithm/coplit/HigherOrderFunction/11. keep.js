// 배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴해야 합니다.

const keep = (arr, num) => {
  return arr.filter((el) => el === num);
};

let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [2, 2]
