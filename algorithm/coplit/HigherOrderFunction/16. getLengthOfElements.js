// 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴해야 합니다.
// arr.map 이용

const getLengthOfElements = (arr) => {
  return arr.map((el) => el.length);
};

let output = getLengthOfElements(["", "a", "ab", "abc"]);
console.log(output); // --> [0, 1, 2, 3]

output = getLengthOfElements(["hello", "code", "states"]);
console.log(output); // --> [5, 4, 6]
