// 문제
// 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.

// 주의 사항
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 어떤 수로 나누어도 나머지가 0입니다.
// 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

// 수도 코드
// 1. num1을 num2보다 작을때 까지 계속 빼준다
// 2. num1에 num2를 뺀 값을 다시 num1에 할당한다.
// 3. 계속 빼다가 num1이랑 num2가 같을때도 빼야 나머지가 0이 나오므로
// 4. 1번을 'num1을 num2보다 작거나 같을때 까지 계속 빼준다'로 바꾼다.


// sovle.1
function modulo(num1, num2) {
  if(num2 === 0) return 'Error: cannot divide by zero'

  while(num1 >= num2) {
    num1 = num1 - num2
  }

  return num1;
}



// 입출력 예시
let output = modulo(25, 4);
console.log(output); // --> 1