// Literal Type
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자료를 한 변수에 여러게 저장할 수 있는 const의 상위 버전 느낌!
var 이름; // -> 이제 이름에는 kim 만 들어올 수 있음
var 접니다;
접니다 = '대머리';
접니다 = '솔로';
function 함수(a) {
    return 1;
}
// 문제
function 가위바위보(손) {
    return [손];
}
console.log(가위바위보('보')); // ['보']
var 자료 = {
    name: 'kim'
}; // => as const 는 해당 속성의 타입을 value로 변경해 줌
자료.name; // ==> 'kim'
function func(a) {
    return;
}
func(자료.name);
// =>  에러가 난다!!
// as const 사용하기
// readonly 사용하기
