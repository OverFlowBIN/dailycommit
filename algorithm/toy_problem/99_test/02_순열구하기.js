// 문제
// 1, 2, 3으로만 이루어진 수열 바코드를 만들던 코드스테이츠는 물건의 가짓수가 늘어나자, 
// 기존과는 다른 새로운 수열 바코드를 만드는 알고리즘을 다시 만들고자 합니다.
// 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열이어야 하고, 
// 길이가 M이어야 한다고 할 때, 만들 수 있는 바코드를 전부 배열에 담아 반환하는 함수를 작성하세요.

// 조건
// 수열은 사전 순으로 증가하는 순서로 출력해야 합니다.
// 바코드는 숫자로 반환해야 합니다.
// 입력
// 인자 1: n
// Number 타입의 1 이상 10 이하의 자연수
// 인자 2: m
// Number 타입의 1 이상 n 이하의 자연수
// 출력
// 숫자(Number) 목록이 담긴 배열을 리턴해야 합니다.
// 입출력 예시
// 모든 바코드는 같은 숫자가 있으면 안 됩니다.



function test2 (n, m) {
  let arr = Array.from({length: n}, (_, idx) => idx + 1)
  
  function permu (arr, m) {
    const results = [];
    
    if (m === 1) {
      return arr.map((element) => [element]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = permu(rest, m - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);

      results.push(...attached);
    });

    return results;
  }
  
  let result = permu(arr, m)
  return result.map(el => parseInt(el.join('')))

}
    

// N이 2이고 M이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
const output1 = test2(2, 1);
console.log(output1); // --> [1, 2]

// N이 3이고 M이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
const output2 = test2(3, 2);
console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// N이 3고 M이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]


