const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const arr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return arr.concat(left.slice()).concat(right.slice())
}


function test() {
  const testArray = [4, 5, 2, 1, 3, 8, 7];

  console.log(mergeSort(testArray))
}

test();