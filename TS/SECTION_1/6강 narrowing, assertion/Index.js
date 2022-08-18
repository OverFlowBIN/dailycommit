// narrowing : 어떤 변수가 아직 타입이 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
function func1(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
func1(123);
function func2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    else { // else, else if 가 없으면 에러가 잡힐수도 있음
        return;
    }
}
// Assertion : 타입 덮어 쓰기, 유니온 타입이 쓰인 변수에 대하여 하나의 타입을 선택해줌
// 쓰임
// 1. Narrowing 할 때
// 2. 어떤 타입이 들어올지 100% 확실할 때 쓰임 -> as number로 한 변수에 string 타입을 넣어도 에러캐치를 안해줌
// 3. 왠만하면 쓰지말고 남의코드 debugging용 또는 비상용으로 쓰자!
function func3(x) {
    var array = [];
    array[0] = x;
    // array[0] = <number>x  -> 옛날 as 문법
}
// console.log 찍는법(index.html 에서)
// 브라우저는 ts 파일을 해석못한다 -> 변환된 js 파일을 Html script 태그에 넣어야 한다.
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림 
// let array :(string|number)[] = ["1", 2, "3"];
function func4(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (typeof el === 'string') {
            result.push(+el);
        }
        else if (typeof el === 'number') {
            result.push(el);
        }
    }
    console.log(result);
}
func4(['1', 2, '3', 4]);
// (숙제2) 다음과 같은 함수를 만들어보십시오.
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
// (동작예시)
// func4( { subject : 'math' } )  //이 경우 'math'를 return
// func4( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// func4( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
// Q. 이 자료가 array type 인지 어떻게 검사하냐고요? 구글에 물어보시면 됩니다. 
function func5(obj) {
    if (typeof obj.subject === 'string') {
        return obj.subject;
    }
    else if (typeof obj.subject === 'object') {
        return obj.subject[obj.subject.length - 1];
    }
}
console.log(func5({ subject: 'math' })); //이 경우 'math'를 return
console.log(func5({ subject: ['science', 'art', 'korean'] })); //이 경우 'korean'을 return
console.log(func5({ hello: 'hi' })); //이 경우 타입에러 나면 됩니다 
