//! constructor
// 용도: 비슷한 object를 여러개 만들 때, 복사할 때

const student1 = { name:'kim', age: 15 }
const student2 = { name:'park', age: 14 }
const student3 = { name:'lee', age: 16 }

// 다음과 같이 여러 오브젝트가 필요한 경우

function Student() {
  // 다른함수와 다른 객체 형성 함수라는 표시를 위해 대문자로 시작.
  // this는 새로생선되는 object를 뜻함.
  this.name = 'kim'
  this.age = 15
}


const stu1 = new Student();
console.log(stu1);



function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);


//! prototype(원형)
// javaScript에서만 있는 상속을 위한 속성

function 기계(){
  this.name = 'Kim';
  this.age = 15;
}
기계.prototype.gender = '남';
var 학생1 = new 기계();

console.log(학생1.gender)



// 자바스크립트 내장함수 toString()을 쓸 수 있는 이유

var arr = [1,2,3];
console.log( arr.toString() ); //가능
// arr의 부모 객체가 toString()을 갖고있기 때문에 가능하다.

var arr = [1,2,3];
var arr = new Array(1,2,3);
// 위 두 코드는 완전 똑같은 의미다 -> 결국 객체 내부에 []를 넣어서 만드는것이다.

console.log(Array.prototype);
// 평소에 쓰던 sort, psh, forEach등이 있다.





//! prototype상속 vs constructor 상속
  // 자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속
  // 부모만 가지고 있는걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속
  // 그래서 보통 상속되 있는 함수들은 protupe으로 만들어 놓여져 있음