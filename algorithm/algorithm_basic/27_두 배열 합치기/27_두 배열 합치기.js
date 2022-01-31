// 문제
// Two Pointer Algorithm
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하라.

// for문 한번으로 할 수 있다?



// solve.1
function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  // console.log(arr1, arr2);
  let len = Math.max(arr1.length, arr2.length);
  // console.log(len);

  let result = [];
  for(let i = 0; i < len; i++) {
    if(arr1[i] && arr2[i]) {
      if(arr1[i] <= arr2[i]) result.push(arr1[i]); result.push(arr2[i]);
      // console.log('1', result)
    } 
    else if(arr1[i] && !arr2[i]) result.push(arr1[i]); 
    else if(arr2[i] && !arr1[i]) result.push(arr2[i]); 
  }

  return result;
}



// solve.2
function solution(arr1, arr2) {
  let result = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = p2 = 0;
  while(p1 < n && p2 < m) {
    if(arr1[p1] <= arr2[p2]) result.push(arr1[p1++]);
    else result.push(arr2[p2++])
  }
  console.log(p1, n, p2, m, resu)
  while(p1 < n) result.push(arr1[p1++])
  while(p2 < m) result.push(arr2[p2++])
  return result;
}


// 입출력 예시
let arr1 = [1, 3, 4, 7];
let arr2 = [2, 3, 5, 7, 9];
let output = solution(arr1, arr2);  // --> // [1, 2, 3, 3, 5, 6, 7, 7, 9, 13]
console.log(output);