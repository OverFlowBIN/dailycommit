// 문제
// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.


// solve.1
function powerOfTwo(num) {
  
  while(num > 1) {
    num = num / 2;
  }

  if(num === 1) return true;
  else return false;
}

// solve.2
function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }

  if (num % 2) {
    return false;
  }

  let powered = 2;
  while (powered < num) {
    powered = powered * 2;
  }

  return powered === num;
}

// 2의 거듭제곱 -> 2, 4, 8, 16, 32, 64

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false