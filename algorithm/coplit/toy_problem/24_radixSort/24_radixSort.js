// Radix Sort
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
// 계수 정렬을 이용하여 문제를 풀어라

// pesudoCode
// 십진법 만큼(0 ~ 9) [[], [], [], ...] 이차원 배열 생성(stack)
// 1의 자릿수는 1로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // stack에 쌓인 순서대로 sortedArr(빈배열)에 담는다.
  // 담긴 stack에서...
// 10의 자릿수는 10로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // stack에 쌓인 순서대로 sortedArr(빈배열)에 담는다.
  // 담긴 stack에서...
// 100의 자릿수는 100로 나눠 나눈 값을 인덱스로 하여 이차원 배열에 넣는다
  // ...

// 해당 배열에서 가장 큰 값의 자릿값 만큼 진행한다


// solve.1 우선 양수만 정리
function radixSort(arr) {

  let sorted = arr;
  let stack = Array.from({ length: 10 }, () => []);  // 자리별로 나눠주기
  
  // 가장큰 값의 자릿수 구하기
  let maxLen = Math.max(...arr).toString().split('').length;
  console.log(maxLen);

  // 가장큰 수의 자릿수 만큼 돌리기
  for(let i = 0; i < maxLen; i++) {
    for(let j = 0; j < sorted.length; j++) {
      let 자리별 = Math.floor(sorted[j] / Math.pow(10, i)) % 10   // 1 -> 1 , 2 -> 2, 12 -> 2, 145 -> 5
      stack[자리별].push(sorted[j]);
    }
    sorted = stack.flat();
    stack = Array.from({ length: 10 }, () => []); 
  }

  return sorted;
}


// pesudoCode(음수를 포함할때)
// 음수양수로 나눠서 따로 정렬
// 음수는 순서를 꺼꾸로 해서 정렬한 후 -1을 곱한다.
// 양수배열은 정렬후 음수 배열 다음에 붙여 준다
  // 음수 정렬 array.reverse(el => el * -1 ) + 양의수 정렬 array => return;

// solve.2
function radixSort(arr) {

  // 음수, 양수 배열 나누기
  let negativeArr = [];
  let positiveArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) negativeArr.push(arr[i] * -1)
    else positiveArr.push(arr[i])
  }
  
  console.log('negativeArr', negativeArr)
  console.log('positiveArr', positiveArr)
  

  function sorting (item) {
    if(item.length === 0) return [];
    let sorted = item;
    let stack = Array.from({ length: 10 }, () => []);  // 자리별로 나눠주기
    
    // 가장큰 값의 자릿수 구하기
    let maxLen = Math.max(...item).toString().length;
    // console.log(maxLen);

    // 가장큰 수의 자릿수 만큼 돌리기
    for(let i = 0; i < maxLen; i++) {
      for(let j = 0; j < sorted.length; j++) {
        let 자리별 = Math.floor(sorted[j] / Math.pow(10, i)) % 10   // 1 -> 1 , 2 -> 2, 12 -> 2, 145 -> 5
        stack[자리별].push(sorted[j]);
      }
      sorted = stack.flat();
      // console.log('sorted', sorted)
      stack = Array.from({ length: 10 }, () => []); 
    }

    return sorted;
  }

  return [...(sorting(negativeArr).reverse().map((item) => item * -1)), ...sorting(positiveArr)]
}



const arr1 = [1, 2, 43, 100, 21];
let output1 = radixSort(arr1);
console.log(output1);


const arr2 = [20, -10, -11, 2, 29];
let output2 = radixSort(arr2);
console.log(output2);