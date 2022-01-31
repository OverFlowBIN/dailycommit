// Binary_Search Algorithm
// 이진 검색이 작동하려면 우선 정렬되어있어야 한다.


// 반복문을 이용한 기본적인 탐색은 모든 값을 탐색하는 최악의 경우가 있고,
// 시간 복잡도가 O(N)이다.
const search = (val, arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log('try find index(search) :', i)
    if (val === arr[i]) return i;
  }

  return -1;
}

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('result of search :', search(7, values))


// Binary_Search는 탐색해야 하는 요소를 반으로 나누어 검색하는 방법으로
// 경과 시간이 계속 반으로 줄기 때문에 시간 복잡도가 O(logN)이다
const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while(lower <= upper) {
    console.log('try find result(binary)')
    const middle = Math.floor((upper + lower) / 2);

    if(val === arr[middle]) {
      return middle;
    }

    if(val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1
    }
  }

  return -1;
}

values = [ 4, 5, 6, 7, 8, 9, 10]
console.log('result of binary :', binary(7, values))


// 백준 문제 1654번
// 랜선 자르기
// https://www.acmicpc.net/problem/1654

// 문제
// 집에서 시간을 보내던 오영식은 박성원의 부름을 받고 급히 달려왔다. 박성원이 캠프 때 쓸 N개의 랜선을 만들어야 하는데 너무 바빠서 영식이에게 도움을 청했다.
// 이미 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이다. 박성원은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서 만들어야 한다. 예를 들어 300cm 짜리 랜선에서 140cm 짜리 랜선을 두 개 잘라내면 20cm는 버려야 한다. (이미 자른 랜선은 붙일 수 없다.)
// 편의를 위해 랜선을 자르거나 만들 때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의 랜선을 만들 수 없는 경우는 없다고 가정하자. 그리고 자를 때는 항상 센티미터 단위로 정수길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다. 이때 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에는 오영식이 이미 가지고 있는 랜선의 개수 K, 그리고 필요한 랜선의 개수 N이 입력된다. K는 1이상 10,000이하의 정수이고, N은 1이상 1,000,000이하의 정수이다. 그리고 항상 K ≦ N 이다. 그 후 K줄에 걸쳐 이미 가지고 있는 각 랜선의 길이가 센티미터 단위의 정수로 입력된다. 랜선의 길이는 231-1보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 N개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위의 정수로 출력한다.

// 예제 입력
// 4(K)개의 랜선 
// 11(N)개의 같은 길이로 랜선 만들기
// 802 랜선1
// 743 랜선2
// 457 랜선3
// 539 랜선4


// 예제 출력 1 
// 200


// 힌트
// 802cm 랜선에서 4개, 743cm 랜선에서 3개, 457cm 랜선에서 2개, 539cm 랜선에서 2개를 잘라내 모두 11개를 만들 수 있다.


// 풀기 과정
// left = 0, right = 랜선의 최대 길이
// 중간값(mid) 길이로 랜선이 몇개 나오는지 계산한다.
// 중간값으로 랜선을 N개 이상 만들 수 있다면 left = mid + 1(cm)
//                            없다면 right = mid - 1(cm)


let K = 4;
let N = 11;
let input = [802, 743, 457, 539];















































// function countReturn(len, K, input) {
//   let count = 0;
//   for (let i = 0; i < K; i++) {
//     count += parseInt(input[i] / len, 10)
//   }
//   return count;
// }

// function solution (K, N, input) {
//   let left = 1;
//   let right = input[K - 1];

//   let answer = 0;
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2, 10);
//     let retCount = countReturn(mid, K, input)
//     // console.log(retCount, N);
//     // console.log(left, mid, right);
//     if(retCount >= N) {
//       answer = Math.max(answer, mid);
//       left = mid + 1;
//     } else {
//       right = mid - 1
//     }
//   }
//   console.log(answer)
// }

// solution(K, N, input);