// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  let preSum = nums[0];
  let result = [];

  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (preSum + nums[j] === target) {
        return [nums.indexOf(preSum), nums.lastIndexOf(nums[j])];
      }
    }
    preSum = nums[i];
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// 수도 코드
// 타겟에 합이(두개의 숫자의 합) 9 일때 2 + 7로 합이 같음
// 이때 인덱스 값을 찾기

// 합이니깐 작은값찾기

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
