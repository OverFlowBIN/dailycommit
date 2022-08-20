// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.

const getFullNames = (arr) => {
  return arr.map((el) => el.firstName + " " + el.lastName);
};

let output = getFullNames([
  {
    firstName: "Tim",
    lastName: "Goldfish",
  },
]);
console.log(output); // --> ['Tim Goldfish']

output = getFullNames([
  {
    firstName: "Adam",
    lastName: "Smith",
  },
  {
    firstName: "Jack",
    lastName: "Black",
  },
  {
    firstName: "Samuel",
    lastName: "Jackson",
  },
]);
console.log(output); // --> ['Adam Smith', 'Jack Black', 'Samuel Jackson']

output = getFullNames([]);
console.log(output); // --> []
