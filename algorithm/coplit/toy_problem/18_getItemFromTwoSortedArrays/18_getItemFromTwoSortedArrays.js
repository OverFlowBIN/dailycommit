
// solve.1
const getItemFromTwoSortedArrays1 = function (arr1, arr2, k) {

}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays1(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays1(arr1, arr2, 4);
console.log(result); // --> 3







// solve.2
const getItemFromTwoSortedArrays2 = function (arr1, arr2, k) {
  let leftIdx = 0, rightIdx = 0;
  let leftMax, rightMax;

  while(k > 0){
    let cnt = Math.ceil(k/2);
    let leftStep = cnt, rightStep = cnt;

    // console.log("cnt", cnt);
    // console.log("leftStep", leftStep);
    // console.log("rightStep", rightStep);
    // console.log("leftIdx", leftIdx);
    // console.log("rightIdx", rightIdx);

    if(leftIdx === arr1.length) {
       rightIdx = rightIdx + k;
       break;
    }

    if(rightIdx === arr2.length){
      leftIdx = leftIdx + k;
      break;
    }

    if(cnt > arr1.length - leftIdx){
        leftStep = arr1.length - leftIdx;
    }

    if(cnt > arr2.length - rightIdx){
      rightStep = arr2.length - rightIdx;
    }

    if(arr1[leftIdx + leftStep -1] < arr2[rightIdx + rightStep -1]){
      leftIdx = leftIdx + leftStep;
      k=k-leftStep;
    }else {
      rightIdx = rightIdx + rightStep;
      k=k-rightStep
    }

  }

  leftMax = arr1[leftIdx-1] || -1;
  rightMax = arr2[rightIdx-1] || -1;

  return Math.max(leftMax, rightMax);
};

arr1 = [1, 4, 8, 10];
arr2 = [2, 3, 5, 9];
result = getItemFromTwoSortedArrays2(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays2(arr1, arr2, 4);
console.log(result); // --> 3