// function tyoe은 in, out 두군데에 타입을 정해 줄 수 있다.
function func(x :number) :number {
  return x * 2
}

func(2);


// void type : 리턴하는것을 막아줌
function func2(x :number) :void {
  1 + 1
}
func2(2); // 파라미터에 타입이 지정되있으므로 아무것도 않넣으면 안된다.

function func3(x? :number) :void {
  console.log('x?', x)
}
func3(); // 파라미터에 타입전에 ?가 있으면 있거나 없거나 가능

// 위에 파라미터? 와 동일한 결과값을 다음과 같이 표현할 수 있음(but, 오류남)
// function func4(x :number | undefined) :void {
//   console.log('udefined?', x)
// }
// func4(); // 파라미터에 타입전에 ?가 있으면 있거나 없거나 가능


// narrowing : 파라미터가 union type일 때 조건문 적용
function func5(x :number | string) :void {
  if(typeof x === 'number') {
    console.log(x + 3)
  }
}
func5(2);


// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 

function func6(name? :string) {  // 리턴할게 꼭 없을때 :void 타입을 지정해준다.
  if(typeof name === 'undefined') {
    console.log('이름이 없습니다');
  };
}
func6();

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 

function func7(num :string | number) {
  if(typeof num === 'string') {
    return num.length;
  } else {
    return num.toString().length;
  }
}

let output1 :number = func7('245');
console.log(output1)

let output2 :number = func7(9567);
console.log(output2)


// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.


function func8(earn :number, home :boolean, charming :string) :string {
  let result: number = 0;
  if(home === true) result += 500;
  else if(charming === '상') result += 100;
  result += earn;
  console.log(result)
  
  if(result >= 600) return '결혼가능'
  return;
}

let output3 = func8(700, false, '중');
console.log(output3)

let output4 = func8(100, false, '중');
console.log(output4)

