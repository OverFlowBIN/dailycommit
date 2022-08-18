// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// solve.1 (mine)
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let lengArr = strs.map((el) => el.length);
  let min = Math.min(...lengArr);
  let minIdx = lengArr.indexOf(min);
  let result = "";
  let temp;
  console.log("minIdx", minIdx);

  for (let i = 0; i < strs[minIdx].length; i++) {
    if (temp === "") return result;
    temp = "";
    for (let j = 1; j < strs.length; j++) {
      temp = strs[0][i];
      if (strs[j][i] !== temp) {
        temp = "";
        break;
      }
    }
    result += temp;
  }
  return result;
};

// solve.2(in web)
var longestCommonPrefix = function (strs) {
  if (!strs[0]) {
    return "";
  }
  var preprefix = "",
    prefix = "";
  for (var index = 0; index < strs[0].length; index++) {
    prefix += strs[0][index];
    for (var i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(prefix)) {
        return preprefix;
      }
    }
    preprefix = prefix;
  }
  return prefix;
};

// solve.3(in web)
let longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
