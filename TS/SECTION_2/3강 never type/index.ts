// never
// void와 같은기능
// 조건 1. return 값이 없어야함
// 조건 2. endpoint가 없어야함
// 모든 함수는 기본적으로 undefined를 리턴함(아무것도 리턴안한다 할때)
// => 절대 끝내지 않는 함수여야 never 타입이 적용 된다.

function func1(): never {
  throw new Error(); // 콘솔창에 빨간색으로 에러가 낭모 -> 코드 실행 중단됨 -> never type ok
}

function func(): never {
  while (true) {
    // 내부 코드가 무한히 돈다.
  }
}

// 실수 사용 => 실은 쓸데가 거의 없다 => void를 쓰면됨
// 코드를 이상하게 짜면 간혹 나타남
function func3(params: string) {
  if (typeof params == "string") {
    console.log(params);
  } else {
    console.log(params); // 여기서 pramas type이 never가 된다
  }
}

let func4 = function () {
  // func4는 never type
  throw new Error();
};
