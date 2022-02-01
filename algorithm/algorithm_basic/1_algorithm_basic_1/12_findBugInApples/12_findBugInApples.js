// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.


// 수도코드
// arr의 돌면서 해당요소(배열)에 'B'가 포함되어있는지 indclude를 이용해 확인
    // 확인된 행
  // 확인된 행에서 다시 반복문을 돌려 'B'의 인덱스 확인 하기
    // 확인된 열
  // return [확인된 행, 확인된 열]


// sovle.1
function findBugInApples(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 'B') {
        return [i, j]
      }
    }
  }
}



// 입출력 예시
let output = findBugInApples([['A'], ['B']]);
console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]