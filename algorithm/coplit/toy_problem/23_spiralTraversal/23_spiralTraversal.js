// spiralTraversal

// 현재위치(0, 0)
// 오른쪽 -> 아래 -> 왼쪽 -> 위 -> 오른쪽
// 현재위치를 지나면 현재값 result string에 축척 & 0로 바꾸기
// 오른쪽으로 가다가 0이거나 undefined면 아래로가기
// 아래로 가다가 0이거나 undefined면 왼쪽으로가기
// 왼쪽으로 가다가 0이거나 undefined면 위로가기
// 위로 가다가 0이거나 undefined면 오른쪽으로가기
  // 반복 for문이 다 돌고 위아래좌우가 4방향 모두 undefined or 0 이면 result 리턴


  const spiralTraversal = function (matrix) {
    
    
    


  };






  let matrix = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];
  console.log('undefined????', matrix[3][3]);
  let output = spiralTraversal(matrix);
  console.log(output); // --> 'ABCFIHGDE'
  
  matrix = [
    ['T', 'y', 'r', 'i'],
    ['i', 's', 't', 'o'],
    ['n', 'r', 'e', 'n'],
    ['n', 'a', 'L', ' '],
  ];
  output = spiralTraversal(matrix);
  console.log(output); // --> 'Tyrion Lannister'