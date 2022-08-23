// 문제
// 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

function computeWhenDouble(interestRate) {
  let year = 0;
  let principal = 1;
  while (principal < 2) {
    principal = principal + principal * (interestRate / 100);
    year++;
  }

  return year;
}

let output = computeWhenDouble(7);
console.log(output); // --> 11

function test(num) {
  money = 1;
  year = 0;
  while (money < 2) {
    money = money + money * (num / 100);
    year++;
  }
  return year;
}

let output2 = test(7);
console.log(output2); // --> 11
