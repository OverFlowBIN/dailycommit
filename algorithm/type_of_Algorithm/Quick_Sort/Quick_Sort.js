// QUICK SORT
// 재귀함수로 적용하기



// solve.1
function quickSort(arr, start, end) {

  if(start >= end) {
    return;
  }

  let pivot = start;
  let i = start + 1;
  let j = end;
  let temp;

  while(i <= j) {
    while(arr[i] <= arr[pivot]) {  // 피벗값보다 큰 값을 만날때까지 오른쪽으로 이동
      i++;
    }
    while(arr[j] >= arr[pivot] && j > start ) {  // 피벗값보다 작은값을 만날때까지 왼쪽으로 이동
      j--;
    }
    if(i < j) {   // 엇갈리지 않을때 서로 교체
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    } else {   // 엇갈렸을떄
      temp = arr[j];
      arr[j] = arr[pivot];
      arr[pivot] = temp;
    }
  }

  console.log(arr);

  quickSort(arr, start, j - 1);
  // 정렬이 된 arr(왼쪽만)로 arr이 바뀜
    // 정렬이 된 arr(왼쪽만)로 arr이 바뀜
    // 정렬이 된 arr(오른쪽)로 arr이 바뀜

  quickSort(arr, j + 1, end);
  // 정렬이 된 arr(오른쪽)로 arr이 바뀜
    // 정렬이 된 arr(왼쪽만)로 arr이 바뀜
    // 정렬이 된 arr(오른쪽)로 arr이 바뀜

  
  return arr;
}





// // solve.2
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   const lSorted = quickSort(left);
//   const rSorted = quickSort(right);
//   return [...lSorted, pivot, ...rSorted];

// }

let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let output = quickSort(arr, 0, arr.length - 1);
console.log(output);