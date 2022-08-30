// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
// 버블 정렬(bubble sort)은 여러 정렬 알고리즘(삽입 정렬, 퀵 정렬, 병합 정렬, 기수 정렬 등) 중 가장 기본적인 알고리즘입니다.

// 버블 정렬 알고리즘은 아래와 같습니다.

// 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
// 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
// 1~3의 과정을 첫 요소부터 다시 반복합니다.
// 5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
// 1~3의 과정을 총 n번(배열의 크기) 반복합니다.
// 이 모습이 마치 '거품이 밀려 올라가는 것과 같은 모습'과 같아서 bubble sort라고 부릅니다.

// 아래의 힌트를 바탕으로 (최선의 경우) 수행 시간을 단축할 수 있도록 코드를 수정해보세요.
// 위에서 설명된 알고리즘 1~3의 과정 중 어떤 요소도 위치가 바뀌지 않은 경우, 배열이 정렬된 상태라는 것을 알 수 있습니다.

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let isSorted = true;
//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//         isSorted = false;
//       }
//     }
//     if (isSorted) return arr;
//   }
//   return arr;
// }

// // 5 4 3 2 1 => 4 5 3 2 1 => ... => 43215

// let output = bubbleSort([5, 4, 3, 2, 1]);
// console.log(output); // --> [1, 2, 3]

// 이전 답

// const bubbleSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let swapped = 0;
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped++;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// };

// one more time
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      isSorted = false;
    }
    if (isSorted) return arr;
  }
  return arr;
}

let output = bubbleSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3]
