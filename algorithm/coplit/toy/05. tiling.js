// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다.
// 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

function tiling(n) {
  let memo = [0, 1, 2];
  for (let i = 1; i <= n; i++) {
    if (memo[i] === undefined) memo.push(memo[i - 2] + memo[i - 1]);
    console.log(i, memo);
  }
  return memo[n];
}

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/

// // solve.1 문제 해결은 되지만 큰 수를 다룰 때 너무 오래 걸림
// // let tiling = function (n) {
// //   if (n <= 2) return n;
// //   return tiling(n - 1) + tiling(n - 2);
// // };

// // solve.2
// // let tiling = function (n) {
// //   let arr = [1, 2];

// //   if(arr[n - 1] === undefined) {
// //     arr[n - 1] = tiling(n - 2) + tiling(n - 1)
// //   }

// //   return arr[n - 1]
// // };

// // solve.3
// const memo = [1, 2];
// let tiling = function(n) {
//   if (n > 2) {
//     memo[memo.length] = memo[memo.length - 1] + memo[memo.length - 2];
//   }

//   return memo[n - 1] !== undefined ? memo[n - 1] : tiling(n);
// }
// // 1,2,3,5,8,13

// // 조합 문제
// // n:1 -> 1 세로
// // n:2 -> 2 세로세로1 + 가로가로1
// // n:3 -> 세로 1개 + 가로 2개 -> 3개

// // N;4 -> 처음 세로 -> 3칸남음: n:3개일때 횟수 -> 재귀로 갈수있다!
// //     -> 처음 가로 -> 2칸남음 : n;2개일때 횟수 -> 재귀로 갈수있다!재귀로 2개가니깐 2개 재귀 만들자!

// // n:4 -> (가로+가로) 1개 + 전체 세로 1개 + 남은3칸(세로 + 가로 : 3개) -> 5개
// // n:5 -> 세로 1개 + 남은 4칸()

// // 빅오 알고리즘
//   // 선형 검색의 시간 복잡도
//   // 인풋 사이즈에 관계없이 동일한 스탭을 갖는다.
//     // 빠른 알고리즘 순
//       // 상수 시간 시간복잡도 O(1)
//       // 이진 탐색의 시간복잡도는 O(log n)
//       // 선형 탐색의 시간복잡도는 O(n)
//       // 이중중첩 반복의 시간 복잡도는 O(n^2)
