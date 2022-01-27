// 문제
// 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

// 주의 사항
// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
// arr[i]는 알파벳 순서로 정렬되어야 합니다.
// 집합은 중복된 원소를 허용하지 않습니다.
// 부분집합은 빈 문자열을 포함합니다.
// arr은 사전식 순서(lexical order)로 정렬되어야 합니다.


// 수도 코드
// 1. 중복 문자 삭제하기
// 2. 삭제한 문자 split 이용하여 배열로 하나씩 나열하기 -> 'abc' -> [a, b, c]
// 3. [a, b, c, ab, ac, abc, bc] 이런식으로 하나씩 뽑고 sort하기


// solve.1
const powerSet = function (str) {
  console.log('1.초기값', str)
  // 배열로 만들기
  const arr = str.split('').sort();
  console.log("2.배열정렬", arr);
  
  // 중복삭제
  const filtered = arr.reduce((acc, cur) => {
    if(acc[acc.length - 1] === cur) return acc;
    else return acc.concat(cur)
  })
  console.log("3.중복삭제", filtered)
  

  // 새로운 배열에 중복 삭제 후 하나씩 넣기
  let newArr = [];
  const pickOrNot = (idx, subset) => {
    if(idx === filtered.length) {
      newArr.push(subset);
      return;
    }

    pickOrNot(idx + 1, subset);
    pickOrNot(idx + 1, subset + filtered[idx]);
  }

  pickOrNot(0, '');
  return newArr.sort()

}





// 입출력 예시
let output1 = powerSet('abc');
console.log("결론1 ->", output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log("결론2 ->", output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']















// solve.2
// const powerSet = function (str) {
  
//   // 공백 없애고 sort하기
//   const sorted = str.split('').sort();

//   // 중복 삭제하기
//   const 중복삭제 = sorted.reduce((acc, item) => {
//     if (acc[acc.length - 1] === item) return acc;
//     else return acc.concat(item);
//   });

//   // 새로운 배열에 중복 삭제 후 하나씩 넣기
//   let newArr = [];
//   const pickOrNot = (idx, subset) => {
//     if (idx === 중복삭제.length) {
//       newArr.push(subset);
//       return;
//     }


//     pickOrNot(idx + 1, subset);


//     pickOrNot(idx + 1, subset + 중복삭제[idx]);
//   };

//   pickOrNot(0, '');

//   return newArr.sort();
// };