// 시간복잡도

// O(1)
function O_1_algorithm(arr, idx) {
  return arr[idx];
}

let arr = [1, 2, 3, 4, 5];
let idx = 1;
let result = O_1_algorithm(arr, idx);
console.log('O(1) :', result);

// 해당 코드의 시간 복잡도는 ? O(1)
class Stack {
  constructor() {
    this.arr = [];
  }
  insert(item) {
    this.arr.push(item);
  }
  remove() {
    return this.arr.pop();
  }
  contains(item) {
    return this.arr.indexOf(item) !== -1
  }
}

const stack = new Stack();
stack.insert(1)
stack.insert(2)
console.log('O(1) :', stack);



// DP(dynamic program) 동적 계획법 
function fib(n) {
  if(n <= 2) return 1;
  return fib(n - 2) + fib(n - 1)
}

console.log(fib(1), fib(2), fib(3), fib(4), fib(5))

// Recursion + Memoization

function fibMemo(n, memo = []) {
  // 이미 해결한 하위 문제인지 찾아본다
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  // 없다면 재귀로 결괏값을 도출하여 res 에 할당
  let res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  // 추후 동일한 문제를 만났을 때 사용하기 위해 리턴 전에 memo 에 저장
  memo[n] = res;
  return res;
}

console.log(fibMemo(1), fibMemo(2), fibMemo(3), fibMemo(4), fibMemo(5))



// Iteration + Tabulation
// 이번에는 반복문을 이용하여 다이내믹 프로그래밍 구현

function fibTab(n) {
  if(n <= 2) return 1;
  let fibNum = [0, 1, 1];
  // n 이 1 & 2일 때의 값을 미리 배열에 저장해 놓는다
  for(let i = 3; i <= n; i++) {
      fibNum[i] = fibNum[i-1] + fibNum[i-2];
  // n >= 3 부터는 앞서 배열에 저장해 놓은 값들을 이용하여
  // n번째 피보나치 수를 구한 뒤 배열에 저장 후 리턴한다 
  }
  return fibNum[n];
}

console.log(fibTab(1), fibTab(2), fibTab(3), fibTab(4), fibTab(5))

// 함수 실행시간 체크 함수

var t0 = performance.now();
fib(30);
var t1 = performance.now();
console.log("runtime: " + (t1 - t0) + 'ms')  // 8ms

var t0 = performance.now();
fibMemo(3000);
var t1 = performance.now();
console.log("runtime: " + (t1 - t0) + 'ms')  // 0.3 ms

var t0 = performance.now();
fibTab(3000);
var t1 = performance.now();
console.log("runtime: " + (t1 - t0) + 'ms')  // 0.1 ms

// end
console.log('end')
