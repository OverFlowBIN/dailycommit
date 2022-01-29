// 문제 (2차원 배열)
// 5 * 5 격자판이 아래와 같이 숫자가 적혀있다.
// 10 13 10 12 15
// 12 30 30 28 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두대각선의 합
// 중 가장 큰 합을 출력한다.


// pesudocode.1
// 각 행,열 마다 합을 배열 형태로([가로, 세로, 대각선1, 대각선2]) 두고 그중 최대값을 구한다.
// 모든 행,열의 최대값을 배열에 넣는다
// 모든 최대값이 담긴 배열의 최대값을 구하여 return 한다.

// pesudocode.2
// 가로합의 최대값, 세로합의 최대갑, 대각선합의 최대값 중 최대값 구하기.
// 반복문 같이 쓸 수 있는것들 묶어서 한번에 반복문으로 결과값 내기



// solve.1
// 반복문 모두 따로
function solution(arr) {
  // 행의 길이
  let n = arr.length;


  // 가로의 합
  let rowMax = 0;
  let rowSum = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(rowSum[i] === undefined) rowSum[i] = arr[i][j];
      else rowSum[i] += arr[i][j];
    }
  }
  rowMax = Math.max(...rowSum)
  // console.log(rowMax)

  
  // 세로의 합
  let colMax = 0;
  let colSum = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(colSum[i] === undefined) colSum[i] = arr[j][i];
      else colSum[i] += arr[j][i];
    }
  }
  colMax = Math.max(...colSum)
  // console.log(colMax)


  // 대각선의 합(가운데 대각선으로만 한다는 조건이 있어야 할것 같다...)
  let dia1Max = 0;
  let dia2Max = 0;
  for(let i = 0; i < arr.length; i++) {
    dia1Max += arr[i][i];
    dia2Max += arr[i][arr.length - i - 1];
    // 같은 반복문 안에서 하나는 늘고 하나는 줄어드는 이러한 형태를 자주 써야함
  }

  return Math.max(rowMax, colMax, dia1Max, dia2Max)
}


// solve.2
// 반복문 묶을 수 있는것들 묶어서 사용하기.
function solution(arr) {
  let n = arr.length;  // 격자판 행열 크기 n

  // 두개 이상의 변수의 값을 동일 하게 넣어 줄 때 sum1 = sum2 = 0으로 할당 할 수 있다.
  let sum1 = sum2 = 0;
  let result = 0;
  // 반복문을 돌릴떄 가로세로를 같이 탐색 할 수 있다.
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    // 촤대 값을 구할 때 자기자신(result)를 포함하여 이전과 계속 비교하며 진행할 수 있다.
    result = Math.max(result, sum1, sum2);
    sum1 = sum2 = 0;
  }

  console.log('sum1 :',sum1,'sum2:', sum2)
  // 반복문을 돌릴때 양 대각선을 같이 탐색 할 수 있다.
  for(let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[n - i - 1][i];
  }
  result = Math.max(result, sum1, sum2)
  return result;
}


// 입출력 예시
let arr = [
            [10, 13, 10, 12, 15],
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]
          ]
let output = solution(arr);
console.log(output); // --> 155

