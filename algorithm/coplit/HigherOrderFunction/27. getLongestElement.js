// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.

const getLongestElement = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc.length >= cur.length) return acc;
    return cur;
  }, arr[0]);
};

let output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'

output = getLongestElement(["one", "two", "wow"]);
console.log(output); // --> 'one'
