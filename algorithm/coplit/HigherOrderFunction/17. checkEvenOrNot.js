// 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴해야 합니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.

const checkEvenOrNot = (arr) => {
  return arr.map((el) => {
    if (el % 2 === 1) return "no";
    return "ok";
  });
};

let output = checkEvenOrNot([1, 2, 3, 4]);
console.log(output); // --> ['no', 'ok', 'no', 'ok']

output = checkEvenOrNot([0, 3, 4]);
console.log(output); // --> ['no', 'no', 'ok']
