// MERGE SORT


// Merge Sort -> 병합정렬 -> 합치면서 정렬하는 알고리즘이다.

// 반복적 접근
// 1. 주어진 배열이 "정렬된" 부분 리스트로 나뉘어집니다.
// [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

// 2. 인접한 부분 리스트 2개가 정렬된 부분 리스트로 병합됩니다.
// [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

// 2. 병합 과정 (반복) :
// [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

// 2. 병합 과정 (반복) :
// [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

// 3. 마무리 : 정렬된 배열이 리턴됩니다.
// [1,2,3,4,4,7,9]


// 재귀적 접근
// 주어진 배열을 절반으로 나눕니다.
// 4, 7, 4, 3, 9, 1, 2 -> 4, 7, 4, 3, 9, 1, 2

// 두 배열이 재귀적으로 정렬됩니다.
// 4, 7, 4 -> 4, 4, 7 -> 1, 2, 3, 9

// 두 배열이 병합됩니다.
// 4, 7, 4, 3, 9, 1, 2 -> 1, 2, 3, 4, 4, 7, 9

// 2단계에서 나뉘어진 각각의 배열 4, 7, 4에 대해서도 1-3번의 과정이 재귀적으로 똑같이 진행됩니다.

// 주어진 배열을 절반으로 나눕니다.
// 4, 7, 4 -> 4, 7, 4

// 두 배열이 재귀적으로 정렬됩니다.
// 4 -> 4 -> 4, 7

// 두 배열이 병합됩니다.
// 4, 4, 7 -> 4, 4, 7

// 이 과정의 2단계에서 나뉘어진 4, 7에 대해서도 재귀가 호출됩니다.
// 4는 원소가 하나이기 때문에 정렬하지 않아도 되겠죠?

// 주어진 배열을 절반으로 나눕니다.
// 7, 4 -> 7, 4

// 두 배열이 재귀적으로 정렬됩니다.
// 7 -> 7 -> 4

// 두 배열이 병합됩니다.
// 7, 4 -> 4, 7

// 모든 재귀 호출이 완료되면 3단계에서 병합이 되기 때문에 최종적으로 정렬된 하나의 배열이 리턴됩니다.



// 배열을 반으로 나눈다
  // 왼쪽 배열을 정렬한다 (재귀)
  // 오른쪽 배열을 정렬한다 (재귀)


// solve.1(재귀적 접근)
function mergeSort (arr) {
  if(arr.length <= 1) {
    return arr;
  }

  // [3, 2, 5, 1, 4, 6]
  const midIdx = Math.floor(arr.length / 2);  // 3
  const leftArr = arr.slice(0, midIdx);  // [3, 2, 5]
  const rightArr = arr.slice(midIdx); // [1, 4, 6]

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  const sortedArr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  return sortedArr.concat(left.slice()).concat(right.slice());
}



let arr = [3, 5, 4, 7, 6, 8, 2, 1, 3, 9];
let output = mergeSort(arr)
console.log('1', output);





// solve.2(반복접 접근)
function mergeSort2(arr) {
  let sorted = [];

  let i = 0;
  let m = Math.floor(arr.length / 2);
  let j = m + 1
  let k = 0;

  // 작은 순서대로 배열에 삽입
  while(i <= m && j <= arr.length - 1) {
    if(arr[i] <= arr[j]) {
      sorted[k] = arr[i];
      i++;
    } else {
      sorted[k] = arr[j];
      j++
    }
    k++
  }
  // i가 먼저 끝나거나 j가 먼저 끝나면 남은 데이터를 다 넣어줘야한다.
  if(i > m) {  // i가 먼저 끝났을때 남은 j 데이터 넣어주기
    for(let t = j; t <= arr.length - 1; t++) {
      sorted[k] = arr[t];
      k++;
    }
  } else {
    for(let t = i; t <= m; t++) {
      sorted[k] = arr[t];
      k++;
    }
  }
  // 이젠 정렬된 배열을 실제 배열의 값으로 삽입해야한다.
  for(let t = 0; t < arr.length; t++) {
    arr[t] = sorted[t];
  }

  return arr;

  // [ 3, 5, 4, 7, 6, 8, 2, 1, 3, 9 ]
  // [ 2, 1, 3, 3, 5, 4, 7, 6, 8, 9 ]

}



let arr2 = [3, 5, 4, 7, 6, 8, 2, 1, 3, 9];
let output2 = mergeSort2(arr2)
console.log('2', output2);



function mergeSort3 (arr) {
  
}