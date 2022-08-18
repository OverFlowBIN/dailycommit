// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// 수도코드
// arr의 돌면서 해당요소(배열)에 'B'가 포함되어있는지 indclude를 이용해 확인
// 확인된 행
// 확인된 행에서 다시 반복문을 돌려 'B'의 인덱스 확인 하기
// 확인된 열
// return [확인된 행, 확인된 열]

// sovle.1 => 0.113ms
function findBugInApples1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "B") {
        return [i, j];
      }
    }
  }
}

// solve.2 => 0.041ms
function findBugInApples2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("B")) {
      return [i, arr[i].indexOf("B")];
    }
  }
}

// 입출력 예시
let output1 = findBugInApples1([["A"], ["B"]]);
console.log(output1); //[1, 0]

console.time("findBugInApples1");
output1 = findBugInApples1([
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "B", "A"],
]);
console.log(output1); //[1, 1]
console.timeEnd("findBugInApples1");

// 입출력 예시
let output2 = findBugInApples2([["A"], ["B"]]);
console.log(output2); //[1, 0]

console.time("findBugInApples2");
output2 = findBugInApples2([
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "B", "A"],
  ["A", "A", "A", "A", "A"],
]);
console.log(output2); //[1, 1]
console.timeEnd("findBugInApples2");
