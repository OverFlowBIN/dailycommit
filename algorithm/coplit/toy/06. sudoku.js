// 스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다.
// 퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다.
// 일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.

function sudoku(board) {
  if (!board.flat().includes(0)) return board;
  // 첫번째 줄에서 0인것들 찾아 stack에 넣기
  let stack = [];
  for (let i = 0; i < board.length; i++) {
    stack = horizonSearch(board[i]);
    for (let j = 0; j < board.length; j++) {
      let point = [i, j];
      let temp = [];
      if (board[i][j] === 0) {
        for (let k = 0; k < stack.length; k++) {
          if (!boxSearch(point, stack[k]) && !verticalSearch(point, stack[k])) {
            temp.push(stack[k]);
          }
        }
        if (temp.length === 1) board[i][j] = temp[0];
      }

      // 세로 찾기, 박스 찾기 true이면 넘어가고, 둘다 false 이면 넣을 수 있다.
      // 박스 찾기 먼저
      // false값이 stack중에 딱 하나만 있으면 바로 넣고 아니면 다음 0으로 넘어가기
      // isEqual을 만들어 false 값을 확인한다.
      // flase가 하나이면 그 값을 매트릭스에 넣기.
      // if(verticalSearch())
    }
  }

  // 1.stack(가로) 찾기
  function horizonSearch(arr) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) stack.push(nums[i]);
    }

    return stack;
  }

  // 2. 세로 찾기
  function verticalSearch(point, stackEl) {
    let y = point[1];

    for (let i = 0; i < board.length; i++) {
      if (board[i][y] === stackEl) return true;
    }
    return false;
  }

  // 3. 3x3찾기
  function boxSearch(point, stackEl) {
    let xStart = parseInt(point[0] / 3) * 3;
    let xEnd = xStart + 2;
    let yStart = parseInt(point[1] / 3) * 3;
    let yEnd = yStart + 2;
    for (let i = xStart; i <= xEnd; i++) {
      for (let j = yStart; j <= yEnd; j++) {
        if (stackEl === board[i][j]) return true;
      }
    }
    return false;
  }

  // 1.stack(가로), 2.세로 찾기, 3.3X3 찾기 따로 function으로 만들기

  return sudoku(board);
}

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

let output = sudoku(board);
console.log(output);

let result2 = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

/* 
[
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];



// board = [                       // 0         0=>5  // 0 =>9 // 0 => 8
//   [0, 3, 0, 2, 6, 0, 7, 0, 1],  // 4 5 패쓰 // 5   // 9      // 8  => 4 9 8 자리에 들어가고 맨앞에 0이 하나 남으면 남은 자리여 4 넣기 , 남은 자리가 2개 이상이면 패쓰
//   [6, 8, 0, 0, 7, 0, 0, 9, 0],
//   [1, 9, 0, 0, 0, 4, 5, 0, 0],
//   [8, 2, 0, 1, 0, 0, 0, 4, 0],
//   [0, 0, 4, 6, 0, 2, 9, 0, 0],
//   [0, 5, 0, 0, 0, 3, 0, 2, 8],
//   [0, 0, 9, 3, 0, 0, 0, 7, 4],
//   [0, 4, 0, 0, 5, 0, 0, 3, 6],
//   [7, 0, 3, 0, 1, 8, 0, 0, 0],  // 이렇게 끝까지 돌리고... 전체를 확인하여 0이 없으면 return, 0이 있으면 다시 처음부터 돌리기.
// ];

// 1. 0 찾기
// 2. 찾은 0의 가로줄 중 없는 숫자 찾기
// 3. 찾은 0의 세로줄 중 2번의 조건을 충족하며 없는 숫자 찾기
// 4. 찾은 0의 3x3영역내에 1~9숫자중 2,3번의 조건을 충족하며 없는 숫자 찾기
// 5. 없는 숫자 기입. => 만약 여러가지가 나온다?
// 6. 여러가지가 나오는 경우 숫자를 건너 뛰어 다음숫자부터 진행
*/
