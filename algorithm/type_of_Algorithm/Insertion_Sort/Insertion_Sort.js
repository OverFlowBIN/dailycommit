// INSERTION SORT

// 1, 5, 7, 8, 10, 6, 4, 3, 2, 9

function insertionSort (arr) {
  for(i = 0; i < arr.length; i++) {
    let j = i;
    let temp;
    while(arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
}


let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let output = insertionSort(arr);
console.log(output);



























// function insertionSort (arr) {
//   for(i = 0; i < arr.length; i++) {
//     let j = i;
//     let temp;
//     while(arr[j] > arr[j + 1]) {
//       temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp;
//       j--;
//     }
//   }
//   return arr;
// }



// function insertionSort (arr, func = el => el) {
//   for(i = 0; i < arr.length; i++) {
//     let j = i;
//     let temp;
//     while(func(arr[j]) > func(arr[j + 1])) {
//       temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp;
//       j--;
//     }
//   }
//   return arr;
// }

// const insertionSort = function (arr, transform = (item) => item) {
//   let sorted = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (transform(arr[i]) >= transform(sorted[i - 1])) {
//       sorted.push(arr[i]);
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (transform(arr[i]) <= transform(sorted[j])) {
//           const left = sorted.slice(0, j);
//           const right = sorted.slice(j);
//           sorted = left.concat(arr[i], right);
//           break;
//         }
//       }
//     }
//   }

//   return sorted;
// };



