// interface : object 타입 설정 방법 중 하나
// type 대신 interface로 사용 가능
// extends로 복사 가능

// type Sqaure = { color : string, width : number }
interface Sqaure { 
  color : string;  // ; 대신 ,(콤마) 가능
  width : number;  
} // => type 대신 interface를 쓸 수 있다. '=' 생략 가능.

let sqaure = { color : "red" , width : 100 };

// extends 복사 기능
// interface School { name : string; age? : number }

interface Student { name : string };
interface Teacher extends Student { age : number }
// Student의 타입설정을 Teacher에 복붙 해주세요~

let student :Student = { name : "kim"}
let teacher :Teacher = { name : "kim", age : 20};



// & 기호(intersection type)
type Animal = { name : string };
type Cat = { age : number } & Animal;  
// name, age type 둘다 갖고 있다.
// extends는 복사의 개념이고 &기호는 양쪽 둘다 만족해 달라는 개념이다. 조금 다르다
// interface도 &기호 사용 가능하다.
  // 중복속성이 되면 object를 사용할때 에러가 난다 => interface가 쓰게 더 좋다!


// interface는 중복선언이 가능 / type은 중복선언 불가
interface Student2 { name : string };
interface Student2 { score : number };  // => 자동으로 두개의 타입을 합쳐준다


// interface의 장점
// 외부 라이브러리같은 경우 interface를 많이 쓴다. => 추후에 타입을 추가하기 쉽다.



// TODO: (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.


interface Product {
  brand : string,
  serialNumber : number,
  model : string[],
}

let 상품 : Product = { 
  brand : 'Samsung', 
  serialNumber : 1360, 
  model : ['TV', 'phone'] 
}



// TODO: (숙제2) array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데 
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
// 오늘 배운 interface 문법을 써봅시다.

interface Cart {
  product : string,
  price : number
}

let 장바구니1 : Cart[] = [ 
  { product : '청소기', price : 7000 }, 
  { product : '삼다수', price : 800 },
] 


// TODO: (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오

interface NewCart extends Cart {
  card : boolean
}

let 장바구니2 : NewCart[] = [
  { product : '청소기', price : 7000, card : false }
]


// TODO: (숙제4) object 안에 함수를 2개 넣고 싶은데요 
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// 이 object 자료를 어떻게 만들면 될까요? 
// interface를 이용해서 object에 타입지정도 해보십시오. 


interface MathObj {
  plus : (a :number, b :number) => number,
  minus : (a :number, b :number) => number,
}

let object :MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b
  }
}

