// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.

const getOnlyAllowedToDrink = (arr) => {
  return arr.filter((el) => el.age >= 18).map((el) => el.name);
};

let output = getOnlyAllowedToDrink([
  { name: "Harry", age: 15 },
  { name: "Ron", age: 14 },
  { name: "Hermione", age: 14 },
]);
console.log(output); // --> []

output = getOnlyAllowedToDrink([
  { name: "Cho", age: 14 },
  { name: "Dumbledore", age: 87 },
  { name: "Snape", age: 53 },
  { name: "Hagrid", age: 43 },
]);
console.log(output); // --> ['Dumbledore', 'Snape', 'Hargrid']

output = getOnlyAllowedToDrink([]);
console.log(output); // --> []
