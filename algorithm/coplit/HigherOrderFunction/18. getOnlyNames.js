// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 각 객체의 'name' 속성을 요소로 갖는 배열을 리턴해야 합니다.

const getOnlyNames = (arr) => {
  return arr.map((el) => el.name);
};

let output = getOnlyNames([
  { name: "Harry", age: 15 },
  { name: "Ron", age: 14 },
  { name: "Hermione", age: 14 },
]);
console.log(output); // --> ['Harry', 'Ron', 'Hermione']

output = getOnlyNames([
  { name: "Cho", age: 14 },
  { name: "Dumbledore", age: 87 },
  { name: "Snape", age: 53 },
  { name: "Hagrid", age: 43 },
]);
console.log(output); // --> ['Cho', 'Dumbledore', 'Snape', 'Hagrid']

output = getOnlyNames([]);
console.log(output); // --> []
