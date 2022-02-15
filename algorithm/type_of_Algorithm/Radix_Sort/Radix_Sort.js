// Radix Sort
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
// 계수 정렬을 이용하여 문제를 풀어라

// pesudoCode
// 십진법 만큼(0 ~ 9) [[], [], [], ...] 이차원 배열 생성(stack)
// 1의 자릿수는 1로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // stack에 쌓인 순서대로 sortedArr(빈배열)에 담는다.
  // 담긴 stack에서...
// 10의 자릿수는 10로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // stack에 쌓인 순서대로 sortedArr(빈배열)에 담는다.
  // 담긴 stack에서...
// 100의 자릿수는 100로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // ...

// 해당 배열에서 가장 큰 값의 자릿값 만큼 진행한다



function radixSort(arr) {

  let sorted = arr;
  let stack = new Array(10).fill(0).map(el => []);  // 자리별로 나눠주기
  
  // 가장큰 값의 자릿수 구하기
  let maxLen = Math.max(...arr).toString().split('').length;
  console.log(maxLen);

  // 가장큰 수의 자릿수 만큼 돌리기
  for(let i = 0; i < maxLen; i++) {
    for(let j = 0; j < sorted.length; j++) {
      let 자리별 = Math.floor(sorted[j] / Math.pow(10, i)) % 10   // 1 -> 1 , 2 -> 2, 12 -> 2, 145 -> 5
      stack[자리별].push(sorted[j]);
    }
    sorted = stack.flat();
    stack = new Array(10).fill(0).map(el => []); 
  }

  return sorted;
}

// console.log(Math.floor((21) / Math.pow(10, 0)) % 10)



const arr1 = [1, 2, 43, 100, 21];
let output1 = radixSort(arr1);
console.log(output1);


// const arr2 = [20, -10, -11, 2, 29];
// let output2 = radixSort(arr2);
// console.log(output2);