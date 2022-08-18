// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.

function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.

  if (num === 0) return num;
  return num + sumTo(num - 1);
}

let output = sumTo(10);
console.log(output); // --> 55
