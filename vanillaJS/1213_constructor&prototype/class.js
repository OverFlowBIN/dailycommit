let counter1 = {
  value: 0,
  increase() {
    this.value++ // 메소드 호출을 할 경우, this는 counter1을 가리킵니다
  },
  decrease() {
    this.value--
  },
  getValue() {
    return this.value
  }
}

counter1.increase()
counter1.increase()
counter1.increase()
counter1.decrease()
console.log(counter1.getValue()) // 2


function Car(brand, name, color) {
  this.brand = brand;  // 여기서 this는 avante(새로 만들어지는 객체)이다.
  this.name = name;
  this.color = color;
}

Car.prototype.drive = function() {
  console.log(this.name + '가 시동이 켜졌다.')
  console.log(this.brand + '에서 만들어진 차다.')
  console.log(this.color + '색의 차이다.')
}

let avante = new Car('hyundai', 'avante', 'white') // avante라는 instance 생성
// 객체 지향 프로그래밍(OOP)에서 인스턴스(instance)는 해당 클래스의 구조로 컴퓨터 저장공간에서 할당된 실체를 의미한다. 여기서 클래스는 속성과 행위로 구성된 일종의 설계도이다. OOP에서 객체는 클래스와 인스턴스를 포함한 개념이다.
// 이해하기 쉽게 일반적인 단어로 설명하자면, 계산 문제를 '입력과 출력이 명확히 기술된 것'으로 수학적으로 정의할 때, 계산 문제의 입력이 될 수 있는 것은 무한히 많이 존재하고 그것들 하나하나를 해당 계산 문제의 인스턴스라고 부른다.
console.log('avante: ',avante)  // new 키워드를 이용하여 새로운 객체(인스텐스)를 만든다.
console.log('color: ' ,avante.color)
console.log('name: ', avante.name)
console.log('brand: ', avante.brand)
avante.drive();  // avante에 drive메소드를 이용하여 함수(메소드)를 작동시킨다.



class Car2 {
  constructor(brand, name, color) {
    this.brand = brand;  
    this.name = name;
    this.color = color;
  }

  drive() {
    console.log(this.name + '가 시동이 켜졌다.')
    console.log(this.brand + '에서 만들어진 차다.')
    console.log(this.color + '색의 차이다.')
  }

    
}

let k5 = new Car2('kia', 'k5', 'black')

console.log('k5: ',k5)  
console.log('color: ' ,k5.color)
console.log('name: ', k5.name)
console.log('brand: ', k5.brand)
k5.drive();  

//expact
// k5:  Car2 { brand: 'kia', name: 'k5', color: 'black' }
// color:  black
// name:  k5
// brand:  kia
// k5가 시동이 켜졌다.
// kia에서 만들어진 차다.
// black색의 차이다.




class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

const alex2 = new Person('yb', 'kim', 32, 'male', 'baketball')
alex2.greeting();



class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}


const alex = new Teacher('yb', 'kim', 32, 'male', 'baketball', 'math', '13th')

console.log(alex.subject)
console.log(alex._subject)
alex._subject = 'biology'
console.log(alex.subject)
console.log(alex._subject)
console.log(alex.greeting())
console.log(alex.greeting())





// super 기능

// super = Reference to the parent class (super class)
//         Very similar to 'this' keyword
//         Can use a super class: constructor, methods

class PersonA {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcom() {
    console.log('Hello', this.name)
    console.log('You are', this.age, 'years old')
  }

}

class StudentA extends PersonA {

  constructor(name, age, gpa) {
    // this.name = name;
    // this.age = age;
    // super(parent class mothod or property)로 대체하기
    super(name, age);
    this.gpa = gpa;
  }

  hello() {
    super.welcom();
    console.log('Your gpa is', this.gpa.toFixed(1)) 
    // 2.0을 console에 찍으면 2로 나옴 
      // 소숫점 표현을 위해 .toFixed(x) -> (소숫점 x자리까지 표현)을 사용
  }

}

class TeacherA extends PersonA {

  constructor(name, age, classSize) {
    // this.name = name;
    // this.age = age;
    // super(parent class mothod or property)로 대체하기
    super(name, age);
    this.classSize = classSize; 
  }

  hello() {
    super.welcom();
    console.log('Your classSize is', this.classSize)
  }
}

let student = new StudentA('alex', 21, 2.0);
let teacher = new TeacherA('Bob', 45, 30);

// console.log(student.name);
// console.log(student.age);
// console.log(student.gpa);

// console.log(teacher.name);
// console.log(teacher.age);
// console.log(teacher.classSize);

console.log('-------------','student.hello()','--------------')
student.hello();
console.log('-------------','teacher.hello()','--------------')
teacher.hello();






console.log('-------------------------------')
 const arr = new Array(3)
 console.log(arr)

 const obj = new Object(3)
 console.log(obj)




function PersonB(age, gender, interests) {
  this.name = {
    first: 'a',
    last: 'b'
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

const newPerson = new PersonB(22, 'male')

console.log('-------------------------------')
console.log(newPerson)
