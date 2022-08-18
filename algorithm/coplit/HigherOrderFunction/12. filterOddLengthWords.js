// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴해야 합니다.

const filterOddLengthWords = (arr) => {
  return arr.filter((el) => el.length % 2 === 1);
};

let output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output); // --> ['there', "now']
