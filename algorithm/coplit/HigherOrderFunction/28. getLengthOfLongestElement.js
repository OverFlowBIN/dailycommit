// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴해야 합니다.

const getLengthOfLongestElement = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc.length >= cur.length) return acc;
    return cur;
  }).length;
};

let output = getLengthOfLongestElement([
  "one",
  "two",
  "sadkojsad23j",
  "three",
  "2382sd",
  "skdjhasd",
  "one",
]);
console.log(output); // --> 5
