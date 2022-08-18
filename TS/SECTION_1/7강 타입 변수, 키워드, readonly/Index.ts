// type aliases : 타입 변수는 맨앞에 대문자로 하는게 국룰
type Animal = string|number|undefined;

let 동물 :Animal;
let 고양이 :Animal = '야옹이';

type AnimalObj = { name :string, age :number };
let 돼지 :AnimalObj = { name: "꿀꿀이", age :3 };


// const type -> 재할당을 금짖 하지만 const로 담은 obj수정은 자유롭게 가능
const 출생지역 = { region: 'seoul'};


// const로 오브젝트 안에 속성 락걸기 (obj 안에서)
type Girlfriend = {
  readonly name? :string  // -> 실수로 수정하면 애러가 난다, ? 를 붙일 수 있다
}

const 여친 :Girlfriend = {
  name: '엠버'
}
// 여친.name = '유라' -> 에러가난다 하지만 자바스크립트 파일에서는 바뀐다 => 타입에러일뿐


// 선언된 타입 합치기
type Name = string;
type Age = number;
type person = Name | Age; // -> 타입 합치기

type PositonX = { x : number };
type PositonY = { y : number };

type NewType = PositonX & PositonY; // -> 오브젝트 타입 합치기
let postion :NewType = { x : 10, y : 20 };


// 같은 이름의 type 변수 재정의 불가능





// TODO: (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 그건 여러분들이 한번 테스트해보길 바랍니다. 
type PositonX2 = { x : number, y : number };
type PositonY2 = { y : number };
type NewType2 = PositonX2 & PositonY2; // -> 오브젝트 타입 합치기
let postion2 :NewType2 = { x : 10, y : 20 };
// 중복된 속성이 있어도 오류가 안생김!




// TODO: (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type newObjType = { 
  color? : string, 
  size : number, 
  readonly postion : string[] 
}


// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type User = { 
  name : string, 
  phone : number,
  email? : string
}



// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type Adult = { adult : boolean };
type AdultUser = User & Adult

let 회원가입정보 :AdultUser = {
  name : 'kim',
  adult : false,
  phone : 1234
}

