// INSERTION SORT

function insertionSort (arr) {
  for(i = 0; i < arr.length; i++) {
    let j = i
    let temp;
    while(arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
};


let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let output = insertionSort(arr);
console.log(output);
