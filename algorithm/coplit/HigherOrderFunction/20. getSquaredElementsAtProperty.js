// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴해야 합니다.

const getSquaredElementsAtProperty = (obj, key) => {
  if (Array.isArray(obj[key])) {
    let result = obj[key].map((el) => Math.pow(el, 2));
    return result;
  }
};

const obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
