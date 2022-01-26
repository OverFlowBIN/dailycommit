// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.




// solve.1
function superIncreasing(arr) {
  let sum = arr[0] + arr[1];

  for(let i = 2; i < arr.length; i++) {
    if(sum >= arr[i]) return false;
    sum += arr[i]
  }

  return true;
}




// solve.2
// function superIncreasing(arr) {
//   let add = arr[0];
//   let boolean = true;

//   for (let i = 1; i < arr.length -1; i++) {
//     add += arr[i]
//     console.log(add)
//     if (add >= arr[i+1]) {
//       boolean = false;
//       break;
//     } else {
//       boolean = true;  
//     }
    
//   }
//   return boolean;
// }




// solve.3
// function superIncreasing(arr) {
//   let sum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= sum) {
//       return false;
//     }
//     sum = sum + arr[i];
//   }
//   return true;
// }




// 입출력 예시
let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false