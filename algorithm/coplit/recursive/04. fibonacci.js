// 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

function fibonacci(num) {
  // if (num === 0) return 0;
  // if (num === 1) return 1;
  if (num <= 1) return num;

  return fibonacci(num - 2) + fibonacci(num - 1);
}

let output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
