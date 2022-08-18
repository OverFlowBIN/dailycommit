// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.

const getElementsLessThan100AtProperty = (obj, key) => {
  return obj[key].filter((el) => el < 100);
};

const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
