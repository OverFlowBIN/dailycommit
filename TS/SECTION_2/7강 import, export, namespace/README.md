<!-- 만든 타입변수를 다른 파일에서 사용하고 싶은 경우 자바스크립트 import export 문법 그대로 사용가능합니다.

import export 문법이 처음이라면 듣는 의미가 없을 수 있으니 간략하게 설명하자면







a.ts -> b.ts 이렇게 변수나 함수를 가져다쓰고 싶은 경우



(a.ts)

export var 이름 = 'kim';
export var 나이 = 30;
(b.ts)

import {이름, 나이} from './a'
console.log(이름)




이렇게 사용하면 됩니다.

1. 우선 변수를 다른 파일에서 쓰이게 내보내고 싶으면 export 문법으로 내보내야하고

2. export된 변수를 가져와서 쓰고 싶으면 import 문법으로 가져와야합니다.

export 하고 싶으면 변수나 함수 정의부분 왼쪽에 export 키워드 붙이면 되고

import 하고 싶으면 import {변수명} from 파일경로

이렇게 쓰면 됩니다. 경로는 ./ 부터 시작해야합니다 현재경로라는 뜻이고 ts 파일 확장자는 안붙여야합니다.







import * from './a';
console.log(이름);
console.log(나이);


변수명 쓰기 귀찮으면 import * 하셔도 됩니다. 그 파일에서 export된 변수를 전부 import 해오는 문법입니다.

참고로 export default 이런 것도 있는데 첨 들어보면 나중에 찾아보도록 합시다.









a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은 경우



(a.ts)

export type Name = string | boolean;
export type Age = (a :number) => number;
(b.ts)

import {Name, Age} from './a'
let 이름 :Name = 'kim';
let 함수 :Age = (a) => { return a + 10 }
타입도 똑같이 사용하면 됩니다.





Q. 다른 파일에서 쓰지못하는 a.ts에서만 쓰고 싶은 일종의 로컬 타입은 어떻게 만드나요?

A. export 안붙이면 그게 a.ts에서만 쓸 수 있는 타입이죠 뭐















과거엔 namespace를 썼습니다



타입스크립트 1.5 버전 이하였나 그 때는 자바스크립트 import / export 문법이 없었습니다.

그냥 <script src=""> 이걸 여러개 써서 파일들을 첨부해서 썼는데 그 문법의 문제는

파일이 많아질 수록 변수명이 겹치는 위험이 발생한다는 점입니다.

그래서 외부 파일에서 사용하지 않을 변수들은 함수로 감싸거나 그랬는데

타입변수들은 namespace 문법으로 숨겼습니다.







(a.ts)

namespace MyNamespace {
  export interface PersonInterface { age : number };
  export type NameType = number | string;
}
중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespace 안에 써서 export 해줬습니다.









(b.ts)

/// <reference path="./a.ts" />

let 이름 :MyNamespace.NameType = '민수';
let 나이 :MyNamespace.PersonInterface = { age : 10 };
그러면 ts 파일은 이상한 <reference/> 라는 태그를 이용해서 다른 파일을 import해올 수 있는데

그럼 이제 그 파일에 있던 namespace를 사용가능합니다.

네임스페이스명.타입명

이렇게 쓰면 다른 파일에 있던 타입변수를 자유롭게 쓸 수 있습니다.







(b.ts)

/// <reference path="./a.ts" />

let 이름 :MyNamespace.NameType = '민수';
let 나이 :MyNamespace.PersonInterface = { age : 10 };

type NameType = boolean; //사용 가능
interface PersonInterface {} //사용 가능
점찍어서 써야하기 때문에 다른 변수명을 오염시키지 않아서

변수명 중복선언문제를 방지할 수 있어서 유용합니다.

근데 자바스크립트 es6 버전이 나온 이후로 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결가능해서

namespace는 그렇게 많이 쓰이진 않습니다.





(참고) 옛날 옛적엔 module 키워드를 썼었는데 갑자기 namespace 키워드로 바뀌었습니다. 참고로 알아둡시다.  -->
