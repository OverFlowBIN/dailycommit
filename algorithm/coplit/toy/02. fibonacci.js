// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 재귀함수를 이용해 구현해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacci(num - 2) + fibonacci(num - 1);
};

let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34

// fibo(4) => return =>
// f(3) + f(2)
// f(1) + f(2) + f(0) + f(1)
// f(1) + f(0) + f(1) + f(0) + f(1) = 1 + 0 + 1 + 0 + 1 => 3

// fibo(5) => return =>
// f(4) + f(3)
// f2 + f3 + f1+f2
// f0 + f1 + f1 + f2 + f1 + f0 + f1
// 0 + 1 + 1 + 0 + 1 + 1 + 0 + 1 => 5
