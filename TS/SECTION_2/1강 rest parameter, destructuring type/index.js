// rest parameter type 
// 기본적으로 any type으로 되어있음
function 함수(...a) {
    console.log(a); // [1, 2, 3, 4, 5]
}
함수(1, 2, 3, 4, 5);
// spread operator
// rest parameter와는 다른 문법임
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);
// destructuring 
let [변수1, 변수2] = ['안녕', 100];
console.log('변수1', 변수1);
console.log('변수2', 변수2);
let { student: student, age: age } = { student: true, age: 20 };
console.log('student', student);
console.log('age', age);
let obj = { student: true, age: 20 };
function func1({ student, age }) {
    console.log('student', student);
    console.log('age', age);
}
func1(obj);
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
function homework1(...num) {
    return num.reduce((a, b) => {
        if (a > b)
            return a;
        else
            return b;
    });
}
console.log('maxNum is =', homework1(6, 3, 7, 2));
;
function homework2({ user, comment, admin }) {
    console.log('user', user);
    console.log('comment', comment);
    console.log('admin', admin);
}
homework2({ user: 'kim', comment: [3, 5, 4], admin: false });
// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
function homework3([a, b, c]) {
    console.log('idx 1', a);
    console.log('idx 2', b);
    console.log('idx 3', c);
}
homework3([40, 'wine', false]);
