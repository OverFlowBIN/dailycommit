// 문제
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하라.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지한다,.




// solve.1
// includes 사용하기
function solution (str) {
let result = '';
for (let el of str) {
  if(!result.includes(el)) result += el;
  }
 return result;
}



// solve.2
// 객체로 들어가는 갯수 세보고 Object.keys, join 사용해보기
function solution (str) {
  let arr = str.split('');
  let obj = {};

  for(let el of arr) {
    if(obj[el] === undefined) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }
  // console.log(obj)
  // console.log(Object.keys(obj))

  let result =  Object.keys(obj)
  return result.join('');
}



// solve.3
// indexOf 사용하기(arr, string 모두 사용 가능)
function solution (str) {
  let result = '';
  for(let el of str) {
    if(result.indexOf(el) === -1) result += el
  }
  return result;
}


// solve.4
// indexOf 사용하기
function solution (str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === i) result += str[i];
  }
  return result;
}



// 입출력 예시
let str = 'ksekkset'
let output = solution(str);
console.log(output);  // --> 'kset'