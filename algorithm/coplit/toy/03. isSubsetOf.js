// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

function isSubsetOf(base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  // 둘다 sort하고 sample의 첫번째가 base를 for문으로 돌렸을때 들어 있다면 해당 인덱스를 true 유지하고
  // 해당 인덱스 까지 삭제 한 후 그 이후부터 다시 돈다.

  function findBaseIdx(base, sampleEl, startIdx) {
    // base, 3, 1
    for (let i = startIdx; i < base.length; i++) {
      if (base[i] === sampleEl) return i + 1; // return 1
    }
    return -1; // for문이 다 돌고 나서 return -1을 해야된다 => 윗중에서 return -1이면 for문이 돌다가 조건이 아닐때 return -1을 하니 주의해야된다
  }

  let startIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    startIdx = findBaseIdx(base, sample[i], startIdx);
    if (startIdx === -1) return false;
  }

  return true;
}

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false

// // solve.1 -> 마지막 테스트 케이스 통과 안됨 ( isSubsetOf Advanced 최대 길이 70,000이상의 배열의 부분 집합을 판별해야 합니다 )
// let isSubsetOf = function (base, sample) {
//   // 샘플의 요소하나 순차적으로 픽하여 베이스 배열에 담겨있는지 확인하기
//   for(let i = 0; i < sample.length; i++){
//     if(base.includes(sample[i])){
//       return true;
//     }
//   }

//   return false;
// };

// //solve.2 -> 없으면 break -> 반복문을 돌아야하는 부분집합이 너무 커지므로 solve.1과 동일한 결과
// let isSubsetOf = function (base, sample) {
//   // 샘플의 요소하나 순차적으로 픽하여 베이스 배열에 담겨있는지 확인하기
//   for(let i = 0; i < sample.length; i++){
//     if(base.includes(sample[i])){
//       return true;
//     } else {
//       return false;
//     }
//   }

//   return false;
// };

// // solve.3
// const isSubsetOf = function (base, sample) {
//   base.sort((a, b) => a - b)
//   sample.sort((a, b) => a - b)

//   if(sample[0] > base[base.length -1 ] || base[0] > sample[sample.length - 1]) return false;

//   let result = true
//   for(let i = 0; i < sample.length; i++){
//     for(let n = i; n < base.length; n++){
//       if(sample[i] === base[n]) {
//         result = true;
//         break;
//       }
//     result = false
//     }
//   }

//   return result;
// }

// 이전 답변
// solve.3
// const isSubsetOf = function (base, sample) {
//   base.sort((a, b) => a - b)
//   sample.sort((a, b) => a - b)

//   // if(sample[0] > base[base.length -1 ] || base[0] > sample[sample.length - 1]) return false;

//   let result = true
//   for(let i = 0; i < sample.length; i++){
//     for(let n = i; n < base.length; n++){
//       if(sample[i] === base[n]) {
//         result = true;
//         break;
//       }
//     result = false
//     }
//   }

//   return result;
// }
