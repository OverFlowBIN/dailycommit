// 문제
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// 주의 사항
// Math.sqrt 사용은 금지됩니다.

// psedoCode.1
// toFixed() -> 3.toFiexd(2) -> 3.00(string) -> to number -> 3(number)
// 3.00이 string이면 Number로 변환시 3으로 변환된다.

// pseudoCode.2
// 1의 자릿수를 하나씩 올리면서 x * x가 num바로 직전까지 가는 값을 구한다.
// 0.1의 자릿수를 하나씩 올리면서 x * x가 num바로 직전까지 가는 값을 구한다.
// 0.01의 자릿수를 하나씩 올리면서 x * x가 num바로 직전까지 가는 값을 구한다.
// 0.001의 자릿수를 하나씩 올리면서 x * x가 num바로 직전까지 가는 값을 구한다.
// 여기까지오면 소숫점 2번째 자리까지는 원하는 값을 찾을 수있다(답은 소숫점 둘째 자리 까지만 원하므로..)
// .toFixed(소숫점 자리) 메소드를 사용하게 되면 -> 

var numObj = 12345.6789;
numObj.toFixed();       // Returns '12346': 반올림하며, 소수 부분을 남기지 않습니다.
numObj.toFixed(1);      // Returns '12345.7': 반올림합니다.
numObj.toFixed(6);      // Returns '12345.678900': 빈 공간을 0으로 채웁니다.
// 이런식으로 해당 숫자 까지 소수점 자리를 0으로 채우는 식으로 표현 할 수 있다.





// solve.1
function computeSquareRoot(num) {
  // 제곱근 구하기
  return +(num**(1/2)).toFixed(2)
}
 


// solve.2
function computeSquareRoot(num) {
  
}




// 입출력 예시
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45


// 힌트
// 소수점 처리는 javascript 표준 내장 객체인 Number를 검색해 봅니다. (js decimal places limit 또는 자바스크립트 소수점 자리수)
// 항상 타입을 주의하여야 합니다.
// 각 자리수(1, 0.1, 0.01, 0.001)마다 (목표값을 넘지 않는) 근사값을 구하는 방식이 있습니다.
// 제곱근을 구하는 방법 중 바빌로니아 법이 있습니다. 바빌로니아 법의 점화식(recurrence formula)을 이해할 수 있다면, 해당 식을 이용해 문제를 풀어도 좋습니다.