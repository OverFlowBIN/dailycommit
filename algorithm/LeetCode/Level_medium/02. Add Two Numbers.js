// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// pesudocode
// [2,4,3] (342) + [5,6,4] (465) => (807) => [7, 0, 8]

var addTwoNumbers = function (l1, l2) {
  let num1 = l1.map((el, idx) => el * 10 ** idx).reduce((a, b) => a + b, 0);
  console.log(num1);
  let num2 = l2.map((el, idx) => el * 10 ** idx).reduce((a, b) => a + b, 0);
  console.log(num2);
  let result = String(num1 + num2)
    .split("")
    .reverse()
    .map((el) => Number(el));
  return result;
};

var addTwoNumbers = function (l1, l2) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < l1.length; i++) {
    num1 += l1[i] * 10 ** i;
  }

  for (let i = 0; i < l1.length; i++) {
    num2 += l2[i] * 10 ** i;
  }
  let result = String(num1 + num2)
    .split("")
    .reverse()
    .map((el) => Number(el));
  return result;
};

let l1 = [2, 4, 3],
  l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
