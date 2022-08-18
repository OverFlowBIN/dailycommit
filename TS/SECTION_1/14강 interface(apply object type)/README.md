<!-- Object에 쓸 수 있는 interface 문법



interface 문법을 쓰시면 object 자료형의 타입을 보다 편리하게 지정가능합니다.

예를 들어서 { color : 'red', width : 100 }

이런 object를 만들고 싶은데 type을 미리 정의하고 싶으면 interface 키워드를 이렇게 만들어봅시다.



interface Square {
  color :string,
  width :number,
}

let 네모 :Square = { color : 'red', width : 100 }


interface는 object랑 비슷한 모습으로 작성하면 됩니다.

type alias와 용도와 기능이 똑같습니다.

1. 대문자로 작명하고 2. { } 안에 타입을 명시해주면 됩니다.

만들어두면 앞으로 object자료 만들 때 interface 만든걸 집어넣으시면 간편하게 타입지정이 가능합니다.





(참고) 한 줄 끝나면 콤마대신 세미콜론도 가능합니다.



















interface 장점은 extends도 가능합니다



Student interface & Teacher interface가 필요하다고 가정해봅시다.

Student는 name 속성이 들어가야하고

Teacher는 name 속성과 age 속성이 들어가야합니다.

어떻게 만들면 되겠습니까 직접 만들어보시고 스크롤 내려보십시오.



























interface Student {
  name :string,
}
interface Teacher {
  name :string,
  age :number,
}
저는 이렇게 만들었습니다. 훌륭합니다.

이제 object에 자유롭게 집어넣고 그러면 될텐데

근데 안에 중복사항들이 좀 보이는 것 같군요.







이런건 extends 문법쓰시면 줄일 수 있습니다.

extends 문법은 interface 여기에 복사해달라는 뜻입니다.



interface Student {
  name :string,
}
interface Teacher extends Student {
  age :number
}
Student interface를 extends 해달라고 적으면 Student 안에 있던걸 복사해서 Teacher에 넣어줍니다.

이제 Teacher 타입은 age, name 속성을 가지고 있습니다.





















type 키워드와의 차이점



type alias와 interface는 거의 똑같은 기능을 제공합니다.

그래서 차이점은 extends 문법이 약간 다르다 이런건데



interface Animal {
  name :string
}
interface Cat extends Animal {
  legs :number
}
interface의 경우 일반적으로 이렇게 extends 합니다.





type Animal = {
  name :string
}
type Cat = Animal & { legs: number }
type alias의 경우 extends는 안되고 & 기호를 쓰면 object 두개를 합칠 수 있습니다.

이러면 Cat 타입은 name, legs 속성을 가질 수 있습니다.







실은 interface도 type처럼 & 기호를 이용해도 복사가능

interface Student {
  name :string,
}
interface Teacher {
  age :number
}

let 변수 :Student & Teacher = { name : 'kim', age : 90 }
& 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능합니다.

(주의) extends 쓸 때 타입끼리 중복속성이 발견될 경우 에러로 혼내주는데 & 쓰면 때에 따라 아닐 수도 있습니다.















타입이름 중복선언시



interface Animal {
  name :string
}
interface Animal {
  legs :number
}
interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends 한 것이랑 동일하게 동작합니다.

이러면 Animal 타입은 name, legs 속성을 가질 수 있습니다.

(장점) type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 내가 덮어쓰기, override 하기 편리합니다.







type Animal = {
  name :string
}
type Animal = {
  legs :number
}
type의 경우 중복선언을 허용하지 않습니다. 에러남

(장점) 엄격하고 진지함







그래서 일반적인 상황에선 type 키워드 자주 활용하면 되는데

다른 사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는게 좋습니다.

그래서 타입스크립트로 작성된 라이브러리들은 interface로 타입정해놓은 곳이 많습니다.

혹은 object 자료형은 전부 interface로 만들고 다른 자료형은 type 키워드로 만들고 이런 것들도 괜찮습니다.

type과 interface 문법을 잘 알고 있으면 기준은 정하기 나름입니다.













extend 할 때 object 안의 속성이 중복될 경우



interface Animal {
  name :string
}
interface Dog extends Animal {
  name :number
}
Animal을 복사해서 Dog interface를 만들어봤습니다.

근데 name 속성이 중복되네요? 그럼 에러납니다 끝









interface Animal {
  name :string
}
interface Dog {
  name :number
}

let 변수 :Dog & Animal = { name : '멍멍' }
& 연산자로 Dog, Animal을 합쳐봤습니다.

근데 name 속성이 중복되네요? 그럼 에러납니다 끝

interface 말고도 type 키워드도 똑같은 현상이 일어납니다.



(주의) 근데 name : string , name : number 라서 에러가 나는 것이지

둘다 name : string 타입이면 에러가 나지 않습니다. 하나로 합쳐줌  -->
