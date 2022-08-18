// 함수와 methods에 type alias 지정하는 법 
// ==> 화살표함수로 해야됨
// ==> 함수 생성 시 함수 선언식으로 만들어야 함수 타입을 적용 할 수 있다.
var func = function (a) {
    return Number(a);
};
// callback function
function func1(a) {
    a();
}
function func2() {
}
func1(func2);
// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
// - type 키워드를 쓰든 말든 알아서 합시다. 
var 회원정보 = {
    name: "kim",
    age: 15,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('hi');
    }
};
회원정보.plusOne(2);
var cutZero = function (a) {
    if (a[0] === '0')
        return a.slice(1);
};
var removeDash = function (a) {
    var result = '';
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var el = a_1[_i];
        if (el !== '-') {
            result += el;
        }
    }
    return Number(result);
};
// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
// (실행예시)
// 만들함수('010-1111-2222', cutZero, removeDash)
var finalFunc = function (a, b, c) {
    return c(b(a));
};
console.log(finalFunc('010-1111-2222', cutZero, removeDash));
