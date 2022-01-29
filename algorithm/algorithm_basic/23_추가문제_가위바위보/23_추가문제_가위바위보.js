// 문제
// 가위 바위 보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 되어있다.
// 예를 들어 N=5이면
// 회수   1  2  3  4  5
// A정보  2  3  3  1  3
// B정보  1  1  2  2  3
// 승자   A  B  A  B  D
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어진다면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하라.

// 입력
// N은 게임 횟수(1 <= N <= 100)
// A는 A가 낸 가위바위보 정보 N개
// B는 B가 낸 가위바위보 정보 N개

// pesudocode
// A, B를 같이 비교해서 승패결과를 배열에 담아 리턴한다.


// solve.1
function solution (n, a, b) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if(a[i] - b[i] === 1) result.push('A')
    if(a[i] - b[i] === -1) result.push('B')
    if(a[i] - b[i] === 2) result.push('B')
    if(a[i] - b[i] === -2) result.push('A')
    if(a[i] === b[i]) result.push('D')
  }
  return result;
}




// 입출력 예제
let N = 5;
let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];

let output =  solution(N, A, B);
console.log(output);  // --> [A, B, A, B, D]

