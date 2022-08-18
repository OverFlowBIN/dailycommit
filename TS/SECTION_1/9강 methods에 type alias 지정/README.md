<!-- function type 도 저장가능

 

함수에 들어갈 파라미터와 return으로 뱉을 값들을 타입지정할 수 있다고 배워봤습니다. 

함수 타입도 type alias로 저장해서 쓸 수 있습니다. 

 

 

예를 들어서 1. 숫자 두개를 파라미터로 입력할 수 있고

2. 숫자를 return 하는 함수를 별명을 지어서 사용하려면

type NumOut = (x : number, y : number ) => number ;
이런 식입니다.

 

화살표 함수 ()=>{} 를 모른다고요
 

 

이걸 함수 만들 때 사용하려면

function 함수이름 :NumOut (){}

이런 식은 불가능합니다. function 키워드에는 () 이거 내부랑 오른쪽에만 타입지정이 가능해서요.

그래서 이렇게 합니다. 

 

type NumOut = (x : number, y : number ) => number 
let ABC :NumOut = function(x,y){
  return x + y
}
함수를 만들 때

let 함수명 = function(){} 이렇게 해도 되니까

함수명 오른쪽에 함수명 : 타입별명

이렇게 지정해서 사용하는 것입니다.

type alias 만들기 싫으면 그냥 함수만들 때 직접 타입작성하면 되겠죠 뭐 

 

 

 

 

 

 

 

methods 안에 타입지정하기 

 

object 자료 안에 함수도 맘대로 집어넣을 수 있습니다. 

몰랐다면 대충 어떻게 생겼는지 알아봅시다.

 

let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();
plusOne 그리고 changeName 함수를 object 자료에 집어넣었습니다.

arrow function, 일반함수 전부 object 안에 맘대로 집어넣을 수 있습니다. 

넣은 함수들은 똑같이 점찍어서 사용가능합니다. 

 

왜 넣냐고요? 그냥 함수도 자료안에 보관해서 쓰고싶을 때가 있기 때문입니다.

근데 저거 타입지정 어떻게 하게요 

그건 여러분도 알고있으니 숙제로 알아서 해보길 바랍니다. 

 

 

(숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

- type 키워드를 쓰든 말든 알아서 합시다. 

 

위에서 배운걸로 혼자가능할듯 혼자 안해보면 클남
 

 

type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}
전 이렇게 했다고 합니다.

진짜 되는지 확인하려면 위에서 만든 let 회원정보에 Member 타입 집어넣어보셈

에러안나면 성공입니다. 

 

 

[collapse]
 

 

(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 

 

 

함수 두개 만드는거 별거 아닙니다
 

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}
한개만 type alias 써봤는데 나머지도 써보십시오.

 

cutZero는 파라미터 입력하면 첫 글자 0을 제거해주고 return,

removeDash는 파라미터 입력하면 - 대시제거해주고 return 하라고 썼습니다. 

/어쩌구/ 이건 정규식문법인데 정규식은 글자에서 원하는 글자를 찾는 식일 뿐입니다. 처음본다면 검색해보도록 합시다. 

그리고 removeDash는 return 하기 전에 숫자로 변형했습니다. 

 

 

[collapse]
 

 

 

(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

 

(실행예시)

만들함수('010-1111-2222', cutZero, removeDash)
이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다. 

이런거 처음이면 어려울 수 있으니 하루 드림 

 

뭐여 어떻게 함수를 파라미터로 집어넣어서 실행시킴?
 

function 함수1(){
  어쩌구~~
}
function 함수2(){
  어쩌구~~
}

함수1(함수2) 
그니까 이렇게 파라미터로 함수를 입력하면

함수2() 이런 코드가 함수1 안에서 실행되어야합니다. 

이건 코드를 어떻게 짜야되냐면.. 별거아닌데 

 

 

function 함수1(a){
  a()
}
function 함수2(){
  어쩌구~~
}

함수1(함수2)
이렇게 디자인해놓으면 함수를 파라미터로 입력했을 때 내부에서 실행할 수 있습니다. 

함수1(함수2) 이렇게 코드를 적으면

함수1() 내부 코드가 실행되고 그러면 함수2() 이게 실행이 되겠군요.

이게 함수에 함수넣어서 실행시키는 법입니다.

 

함수에 들어가는 함수를 멋진 개발자 용어로 콜백함수라고 부릅니다. 

여기선 함수2가 콜백함수네요

 

 

[collapse]
이건 답인데 답보고 베껴봤자 3일 후에 까먹음
 

function 만들함수(a, func1, func2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수('010-1111-2222', cutZero, removeDash)  //1011112222 출력잘됨
자바스크립트 3줄 이상 못읽는 초보는 타입스크립트부터 보면 혼절합니다. 

그래서 타입지정없이 먼저 짜보는 것도 좋은 선택입니다.

 

그래서 저는 코드를 어떻게 짰냐면 

1. 만들함수에 입력한 a라는 파라미터를 func1() 함수에 집어넣습니다.

2. 집어넣은 결과를 result에 저장합니다.

3. 그걸 다시 func2() 함수에 집어넣습니다. 

4. 최종결과를 콘솔창에 출력했습니다.

 

이제 타입지정하면 끝임 

우선 파라미터 3개에 타입 지정을 해보겠습니다.

 

 

 

type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수('010-1111-2222', cutZero, removeDash)  //1011112222 출력잘됨
첫 파라미터는 당연히 문자 들어올 수 있다고 쓰면 되겠고

둘째 파라미터는 cutZero같은 함수가 들어와야합니다. 그래서 함수타입을 alias로 만들어봤습니다.

셋째 파라미터는 removeDash같은 함수가 들어와야합니다. 그래서 함수타입을 alias로 만들어봤습니다.
