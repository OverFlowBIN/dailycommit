// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.

// 수도코드.1
// arr = [2, 11, 13, 7, 13, 3, 11, 5]
// 숫자를 큰 순으로 나열 arr = [13, 13, 11, 11, 7, 5, 3, 2]

// 수도코드.2
// nC3로 풀기
// nC3 모든 경우 배열에 담기
// [2, 3, -11, 7, 5, -13]
// [[2, 3, -11], [2, 3, 7], [2, 3, 5], [2, 3, -13], ...]
// 각 요소들(3개 숫자)을 곱합 값으로 바꾸기 (map)
// Math.max 가장 큰 값 찾기.

// 수도코드.3 큰수 sort 해서 - 갯수 찾기!




// solve.1
// const largestProductOfThree = function (arr) {
  // const largestProductOfThree = function (arr) {
//   arr.sort((a, b) => b - a)
//   let result = 1;
//   for(let i = 0; i <= 2; i++) {
//     result *= Math.abs(arr[i])
//   }
//   return result;
// };




// solve.2
const largestProductOfThree = function (arr) {
  
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  }

  let comb = getCombinations(arr, 3);
  // [[2, 3, -11], [2, 3, 7], [2, 3, 5], [2, 3, -13], ...]
  
  // let result = []
  // for(let el of comb) {
  //   el = el.reduce((pre, cur) => pre * cur)
  //   result.push(el);
  // }

  for(let i = 0; i < comb.length; i++) {
    comb[i] = comb[i].reduce((pre, cur) => pre * cur)
  }
  
  return Math.max(...comb)

};




// solve.3
// const largestProductOfThree = function (arr) {
//   const sorted = arr.slice().sort((a, b) => a - b);
//   const len = arr.length;
//   const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
//   const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
//   return Math.max(candi1, candi2);
// };



// 입출력 예시
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)