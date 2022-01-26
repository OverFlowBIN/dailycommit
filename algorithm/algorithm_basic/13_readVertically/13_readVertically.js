// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 주의사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.



// 수도코드
//  ['ABCDE', 'abcde', 'fghij']
//        A        a          f         B        b         g 
//  arr[0][0] arr[1][0] arr[2][0] arr[0][1] arr[1][1] arr[2][1]


// solve.1
function readVertically(arr) {
  let result = '';
  let maxLen = 0;

  for(let i = 0; i < arr.length; i++) {
    if(maxLen < arr[i].length) maxLen = arr[i].length;
  }
  
  for(let i = 0; i < maxLen; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j][i]) result += arr[j][i];
      else continue;
    }
  }

  return result;
}



// solve.2
// function readVertically(arr) {
//   let maxLength = 0;
//   let result = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (maxLength < arr[i].length) {
//       maxLength = arr[i].length;
//     }
//   }
  
//   for (let i = 0; i < maxLength; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] === undefined) {
//         continue;
//       }
//       result += arr[j][i];
//     }
//   }

//   return result;
// }



// 입출력 예시
let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'