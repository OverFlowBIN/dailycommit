// protected, static keyword
// private, protected 붙이면 class {} 안에서만 사용 가능
class User {
    constructor() {
        this.x = 10; // protected를 이용하여 자식 class에서 사용 가능하게 해준다(private는 불가)
    }
}
class NewUser extends User {
    // 여기에 User에 있던거 다 복붙해줌
    doThis() {
        this.x = 20;
    }
}
let user1 = new NewUser();
user1.doThis();
console.log(user1); // => NewUser {x: 10}
// static => 부모 class에서 직접 부여되고 자식에게 물려주지 않음.
class User2 {
    constructor() {
        this.y = 20;
    }
}
User2.x = 10;
let user2 = new User2();
console.log(user2); // => User2 {y: 20}
// 활용 예시
class User3 {
    constructor() {
        this.intro = User3.skill + "전문가입니다";
    }
}
User3.skill = "js";
var 철수 = new User3();
console.log(철수);
User3.skill = "python";
var 민수 = new User3();
console.log(민수);
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User4 {
    constructor() {
        this.z = 30; // protected: 외부에서 수정 불가, extends로 받으면 자식class 에서도 사용은 가능
    }
}
User4.x = 10; // private: 외부에서 사용,수정하면 안되는 경우, static 자식 class에 물려주지 않음.
User4.y = 20; // public: 외부에서 수정가능(아무것도 적혀있지 않을때와 동일)
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
// <reference>
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
// User의 자식들은 x와 y를 쓸 수 없습니다.
// 2. private static x는 class 내부에서만 수정가능합니다.
// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User5 {
    static addOne(num) {
        // => static을 붙여서 User5.addOne() 바로 쓸 수 있게 해준다.
        User5.x += num;
    }
    static printX() {
        console.log("x", User5.x);
    }
}
User5.x = 10;
User5.y = 20;
User5.addOne(3); //이렇게 하면 x가 3 더해져야함
User5.addOne(4); //이렇게 하면 x가 4 더해져야함
User5.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지
// (숙제3) 이런거 어떻게 만들게요
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
class Square {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        // parmas에 public을 쓰면 바로 변수 선언을 안해주고 바로 쓸 수 있다
    }
    draw() {
        let random1 = Math.random();
        let random2 = Math.random();
        let square = `<div style="position:relative; 
      top:${random1 * 400}px; 
      left:${random2 * 400}px; 
      width:${this.x}px; 
      height : ${this.y}px; 
      background:${this.color}"></div>`;
        document.body.insertAdjacentHTML("beforeend", square);
    }
}
let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
