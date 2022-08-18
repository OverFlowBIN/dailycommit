// Generic 함수 파라미터에 타입 넣기
// narrowing이 귀찮을떄, 함수 쓸때 타입도 넣어주기
function func1(x) {
    return x[0]; // unknown으로 잡아주면 결과값도 계속 unknown 이다
}
let a = func1([4, 2]); // <number>는 MyType으로 되서 함수 어디서든 사용 가능하다
let b = func1(["4", "2"]); // 가끔 이렇게 자동으로 parameter type을 잡아준다.
console.log(a); // generic을 안해주면 x가 unknown이면 a + 1이 안된다 => a가 Unknown 이기떄문에 Unknown + number 안됨
// 타입 파라미터 제한두기
function func2(x) {
    return x - 1;
    // 함수가 실행전 number가 들어올지 뭐가 들어올지 모르기 때문에 오류가 뜸 => narrowing 하거나 <MyType extends number> 추가하기
    // MyType extends number => number 타입의 속성을 갖고 있냐 확인
}
let c = func2(100);
// FIXME: Generic ?
// 1. 함수에 타입 파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능
// TODO: (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
function homework1(a) {
    return a.length;
}
console.log("homework1_1", homework1("hello"));
console.log("homework1_2", homework1(["kim", "park"]));
let data = '{"name" : "dog", "age" : 1 }';
// 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.
function homework2(obj) {
    return JSON.parse(obj);
    // H2Type을 안쓰고 JSON.parse(obj) as animal로 해도 된다.
}
console.log("homework2", homework2(data));
// (동작 예시)
// 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
