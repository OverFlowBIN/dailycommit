// Union Type : 2개 이상의 타입이 합쳐진 타입
let 회원 :number | string = 123;
let 회원2 :(number | string | boolean )= 123;

let 회원들3 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{ a: string | number } = { a: 123 };

// Any Type
// 타입 실드를 해제하는 문법이라고 생각하면됨(일반 자바스크립트 변수와 동일)
// 나중에 타입 관련 버그가 나도 잡아주지 않음.
let 이름 :any;
이름 = 123;
이름 = [];
이름 = {};

let 변수1 :string = 이름; // -> 오류가안남, any를 만나면 타입이 죽음...

// Unkown Type
let 성별: unknown;
성별 = 123;
성별 = '남자';
성별 = [];
// let 변수2 :string = 성별; // -> 오류가난다

// 간단한 수학연산도 타입을 맞춰야함
// 성별 - 1;  // -> 타입끼리 연산만되므로 오류가난다

let 나이 :string | number;
// 나이 + 1; // 오류가 남 -> string +1, number +1은 되지만 union type에 숫자 덧셈은 안됨


// 숙제
let 학교 :{
  score : (number|boolean)[],
  teacher : string,
  friend : (string | string[]),
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


