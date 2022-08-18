// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// pesudocode
//

var isPalindrome = function (x) {
  if (x < 0) return false;

  let reversed = String(x).split("").reverse().join("");
  if (x === +reversed) {
    return true;
  } else {
    return false;
  }
};

var isPalindrome = function (x) {
  const s = x.toString();
  if (s.length === 1) {
    return true;
  }
  const start = s[0];
  const end = s[s.length - 1];
  if (start !== end) {
    return false;
  }
  if (s.length === 2) {
    return true;
  }
  const subStr = s.substring(1, s.length - 1);
  return isPalindrome(subStr);
};

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
