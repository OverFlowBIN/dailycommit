// 객체지향 코드에 필요한 public private protected static keyword
class User {
    constructor(a) {
        this.familyName = "kim";
        // => class 변수에 Params 사용가능
        this.name = this.familyName + " " + a; // familyName을 외부에서 수정하면 안되는 경우
    }
}
let user1 = new User("youngbin");
// user1.name = "lee"; // => private 때문에 수정, 이용 권한이 없음(조회만 가능). class 안에서만 수정, 이용가능
console.log(user1); // User {familyName: 'kim', name: 'kim youngbin'}
// 만약 private를 외부에서 바꾸고 싶다면
// 클래스 내부에 private를 바꾸는 함수를 만들어 둔다.
class Person {
    constructor(name) {
        this.name = name;
        // public name => 자식의 name 속성에 기입해주세요.
    }
}
let 자식 = new Person("kim");
console.log(자식);
