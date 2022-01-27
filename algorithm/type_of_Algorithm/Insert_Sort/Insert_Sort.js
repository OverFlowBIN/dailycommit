// Insert_Sort.1
function insertionSort_1 (array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      array[left] = cur;
      cur = array[left];
      left--;
    }
  }
  return array;
}
  

// Insert_Sort.2
function insertionSort2 (array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
    console.log(`${i}회전: ${array}`);
  }
  return array;
}



  
  

  
  