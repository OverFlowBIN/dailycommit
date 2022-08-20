// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.

const findShortestWord = (arr) => {
  return arr
    .filter((el) => typeof el === "string")
    .reduce((acc, cur) => {
      if (acc.length <= cur.length) return acc;
      return cur;
    });
};

let output = findShortestWord([4, "two", 2, "three"]);
console.log(output); // --> 'two'
