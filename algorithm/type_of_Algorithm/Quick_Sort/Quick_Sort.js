// QUICK SORT
// 재귀함수로 적용하기

function quickSort(arr, start, end) {

    if(start >= end) {  // 원소가 한개인 경우
      return;
    }
    
    let pivot = start;
    let i = start + 1;
    let j = end;
    let temp;

    while(i <= j) { // 엇갈릴 때까지 반복
      while(arr[i] <= arr[pivot]) { // 키 값보다 큰 값을 만날때 까지 오른쪽으로 이동
        i++;
      }
      while(arr[j] >= arr[pivot] && j > start) { // 키 값보다 작은 값을 만날떄 까지 왼쪽으로 이동
        j--;
      }
      if(i > j) { // 엇갈렸다면 키값과 교체
        temp = arr[j];
        arr[j] = arr[pivot]
        arr[pivot] = temp;
      } else {  // 엇갈리지 않았다면 큰값과 교체
        temp = arr[j];
        arr[j] = arr[i]
        arr[i] = temp;
      }
    }
    quickSort(arr, start, j - 1);
    quickSort(arr, j + 1, end);

    return arr;
}


let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let output = quickSort(arr, 0, arr.length - 1);
console.log(output);
