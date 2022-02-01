// 문제
// 졸업 선물
// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
// 선생님이 가지고 있는 예산은 한정되어 있습니다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램 작성하세요.
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
// 배송비는 할인에 포함되지 않습니다.

// pesudocode
// n원이 있고 물건중에 최대한 많은 갯수를 사야한다..
// 첫번째 수는 상품의 가격, 두번째는 상품의 배송비
// 물건 중 하나를 50프로 할인 받을 수 있다.
// 최대 물건 갯수를 구해라




// solve.1
function solution(N, arr) {
  // sort 해서 낮은 가격 부터 예산에서 빼기를 고려!
  let len = arr.length;
  let sort = [];
  while(sort.length < len) {
    for(let i = 0; i < arr.length - 1; i++) {
      if((arr[i][0] + arr[i][1]) > (arr[i + 1][0] + arr[i + 1][1])) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    sort.unshift(arr.pop());
  }


  // sort된  [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] 
  // 배열을 이용하여 처음부터 하나씩 할인 된 가격을 더한값을 result 배열에 담는다.
  // 담은 배열중 length가 가장 긴 값을 구하자
  
  // 반복문으로 sort를 돌면서
  // 순서대로 한번씩 할인을 그 비용을 원래 값에서 뺸다.
  // 나머지도 비용이 작은 순서대로 N에서 뺸다. 뺄때마다 count++
    // N은 계속 재사용해야 하므로 다른 값으로 복사해서 사용한다.

  
  let won = N;
  let count = 0;
  let result;
  for(let i = 0; i < sort.length; i++) {
    result = 0;
    won -= (sort[i][0]/2 + sort[i][1]);
    count++;
    for(let j = 0; j < sort.length; j++) {
      if(won > 0) {
        if(i !== j) {
          won -= sort[j][0] + sort[j][1];
          count++
        }
        count--;
      }
    }
    result = Math.max(result, count)
  }

  return result;
}



// solve.2
function solution(won, arr) {
  let result = 0;
  n = arr.length;
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
  // console.log(arr)...후...
  
  for(let i = 0; i < n; i++) {
    let money = won - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;
    for(let j = 0; j < n; j++) {
      if(j !== i && arr[j][0] + arr[j][1] > money) break;
      if(j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        count++;
      }
    }
    result = Math.max(result, count)
  }
  return result;
}





// 입출력 예제
let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
let output = solution(28, arr);
console.log(output);


