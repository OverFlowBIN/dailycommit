<!-- 자바스크립트의 원래 존재 목적은 단연 html 조작과 변경입니다.

그래서 타입스크립트를 써도 html 조작이 가능한데 근데 그냥 자바스크립트 쓸 때와 약간 다른 점이 존재합니다.

귀찮다는 점이요

왜인지는 실제로 html 조작해보며 알아봅시다.

document.getElementById() 이거 쓰는 법을 설명할 것인데

html 찾고 변경하는 법 안다고 가정하고 진행합니다 모른다면 js 기초강의 ㄱㄱ



근데 또 react, vue 이런걸 쓰다보면 html 조작과 변경하는 법은 몰라도 되긴 합니다.

근데 react, vue 사용할 때도 html 직접조작이 간혹 필요한 경우가 있어서 아예 모르면 안되겠죠











우선 strictNullCheck 옵션을 켜봅시다



많은 환경에서 null이 들어올 경우 체크해주는 옵션을 켜고 코드짭니다.

변수 조작하기 전에 이게 null인지 아닌지 캐치해낼 수 있으니까요.

특히 html 조작할 때 셀렉터로 찾으면 null 어쩌구가 많이 발생하는데 그거 잡을 때도 도움됩니다.



{
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "strictNullChecks": true
    }
}
tsconfig.json 파일을 열어서 strickNullChecks 옵션을 true로 바꾸고 코드짜봅시다.

혹은 그냥 "strict" : true 이런걸 써두면 strickNullChecks 옵션도 자동으로 true로 켜집니다.











HTML 파일 준비



(index.html)

<h4 id="title">안녕하세요</h4>
<a href="naver.com">링크</a>
<button id="button">버튼</button>

<script src="변환된 자바스크립트파일.js"></script>
당연히 타입스크립트 파일을 html에 집어넣어야 html 조작을 하든말든 하겠죠?

html 파일만들고 타입스크립트 -> 자바스크립트 변환된 파일을 집어넣도록 합시다.

그리고 조작을 체험하기 위한 html 몇개 작성했습니다. 여러분도 따라치셈













HTML 찾고 변경해보기



<h4>제목을 다른 글자로 변경해봅시다.

let 제목 = document.querySelector('#title');
제목.innerHTML = '반갑소'
이러면 원래 변경되어야하는데 타입스크립트는 에러를 내줍니다.



"제목이라는 변수가 null일 수 있습니다"

아까 켜놨던 strict 옵션 덕분에 이런 에러를 내주는데

이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇습니다.

(html을 못찾을 경우 null이 됩니다)



그래서 아직 확실하지 않아서 점찍고 조작하고 변경하는걸 금지시켜주는 것입니다.

이거 어떻게 해결하죠? 제가 앞선 강의에서 잘 기억하라던 TS 동작원리나 그런걸 떠올리면 해결책이 나올듯요

정답은
제목이라는 변수가 union type이기 때문에 if문으로 type narrowing 하면 됩니다.

아니면 as 문법으로 assertion 해도 되긴 되겠군요.

[collapse]






그래서 해결책1. narrowing 하면 됩니다.

let 제목 = document.querySelector('#title');
if (제목 != null) {
  제목.innerHTML = '반갑소'
}
멋있게 else문도 추가하면 더 완벽한 코드가 되겠군요.









해결책2. 더 좋은 instanceof 사용하는 narrowing 방법도 있습니다.

let 제목 = document.querySelector('#title');
if (제목 instanceof HTMLElement) {
  제목.innerHTML = '반갑소'
}
instanceof 라는 연산자를 쓰는 것인데 우측에 HTMLElement 입력하면 그 타입인지 체크해줍니다.

나중에 배우게 될 것이니 맛만 보도록 합시다 .









해결책3. assertion 써도 될듯요

let 제목 = document.querySelector('#title') as HTMLElement;
제목.innerHTML = '반갑소'
as 키워드를 쓰면 타입을 구라칠 수 있다고 배웠습니다.

HTMLElement 혹은 그냥 Element 이걸로 구라치면 됩니다.

물론 좋지 않은 임시 땜빵문법이 맞습니다.











해결책4. optional chaining 연산자

let 제목 = document.querySelector('#title');
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반갑소'
}
이건 몰라도 되는데 가끔 innerHTML 작성할 때 엔터키로 자동완성시키면 ?. 이런 연산자가 자동으로 붙습니다.

js 신문법인데 뭔 뜻이냐면 왼쪽에 있는 object 자료안에 .innerHTML이 존재하면 그거 써주시고 없으면 undefined 남기셈~ 입니다.

그래서 가끔 ?. 연산자로 해결할 때도 있습니다.







해결책5. 그냥 strict 설정 false로 끄셈

null 체크해주는게 귀찮으면 그냥 설정 끄면 모든 고민이 해결되긴 합니다.







가장 좋은 방법은 해결책2 instanceof 연산자를 쓰는 것인데

이걸 써야 조작가능한 부분이 있기 때문입니다.

왜 그런 것인지는 스크롤 내려봅시다.











a 태그의 href 속성을 바꿔보자



html 파일에 <a href="naver.com"></a> 이런 태그가 있었습니다.

이 태그의 href 속성을 바꾸고 싶으면 셀렉터로찾고.href = 'https://kakao.com' 이렇게 쓰면 됩니다.

근데 그냥 하면 안될걸요





let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLElement) {
  링크.href = 'https://kakao.com' //에러남 ㅅㄱ
}
에러납니다. HTMLElement 타입은 href 그런 속성 없다~고 하네요.

그럴 경우 그냥 이렇게 바꿔주면 됩니다.







let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com'  //잘됨
}
이러면 에러나지 않습니다.

html 태그 종류별로 정확한 타입명칭이 있습니다.

a 태그는 HTMLAnchorElement

img 태그는 HTMLImageElement

h4 태그는 HTMLHeadingElement

..

백만개가 있는데 이런 정확한 타입으로 narrowing 해주셔야 html 속성 수정을 제대로할 수 있습니다.

전부 외울 필요는 없고 자동완성 잘 될걸요







잠깐 왜 그래야하는지 원리를 설명하자면


타입스크립트에서 쓸 수 있는 HTML 타입들은 이렇게 됩니다.

Element, HTMLElement, HTMLAnchorElement 등이 있는데

Element에 들어있는걸 복사해서 몇개 더 추가해서 HTMLElement 타입을 만들어놨고

HTMLElement에 들어있는걸 복사해서 몇개 더 추가해서 HTMLAnchorElement 타입을 만들어놨습니다.



셀렉터로 대충 찾으면 Element 타입이라는게 부여가 됩니다.

아직 이 태그가 뭔지 몰라서 그냥 광범위한 타입하나를 달랑 지정해주는 겁니다.

이건 광범위한 그냥 일반 html 태그의 특징을 정리해둔 타입이기 때문에 안에 .href .src 이런거 안들어있습니다.



반면 HTMLAnchorElement 이건 조금 상세한 타입입니다.

이 타입은 "href, style, class, id 이런 속성을 가질 수 있다~" 라고 타입이 정의되어있습니다.

그래서 a태그에게 어울리는 타입인 HTMLAnchorElement 라는 타입을 쓸 수 있는지 instanceof 키워드로 확인해야합니다.

확인하는 과정을 narrowing으로 인정해줌



[collapse]














이벤트리스너 부착해보기



버튼 누르면 뭐 실행해주세요~라는 코드도 많이 짭니다.

이것도 그냥 쓰시면 안되고 타입지정해야 잘 사용가능합니다.



let 버튼 = document.getElementById('button');
버튼.addEventListener('click', function(){
  console.log('안녕')
})
이러면 에러납니다. 버튼이라는 변수가 null 일 수도 있어요~ 라는 에러가 날걸요

어떻게 해결할까요? narrowing 알아서 해보십시오.









근데 이런 해결책도 있습니다.

let 버튼 = document.getElementById('button');
버튼?.addEventListener('click', function(){
  console.log('안녕')
})
addEventListener 함수 붙일 때 물음표도 붙이는 것인데 이게 무슨 뜻이냐면

optional chaining 신문법


그래서 혹여나 버튼이라는 변수가 없을 경우 그 자리에 undefined를 내보내고,

HTMLElement로 잘 있으면 addEventListener() 잘 부착해주기 때문에

이것도 일종의 narrowing 이라고 보면 되겠습니다.

그래서 에러안내고 봐줌











(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.



<img id="image" src="test.jpg">
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.

이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?

성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?



type narrowing 잘 하십시오


let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement){
  이미지.src = 'change.jpg';
}
저는 html 요소를 찾고 이걸 HTMLImageElement 타입 맞냐고 확인해봤습니다.

이 경우 src 속성을 수정가능합니다.



[collapse]






(숙제2) 바꾸고 싶은 html 요소가 많습니다.



<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.

자바스크립트 코드를 어떻게 짜야할까요?





에러나면 실패임


let 링크 = document.querySelectorAll('.naver');

링크.forEach((a)=>{
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
})
querySelectorAll() 셀렉터를 쓰면 많은 요소를 한번에 찾을 수 있습니다.

근데 이 경우 타입이 NodeListOf<어쩌구> 이렇게 나오는데 그냥 여러개 찾으면 이런 타입이 된다고 생각하면 됩니다.

그리고 forEach 반복문을 이용해서 찾은 요소마다 각각 href 속성을 변경해줬다고 합니다.





let 링크 = document.querySelectorAll('.naver');

for (let i = 0; i < 3; i++){
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
}
일반 for 반복문을 쓸 경우 변수를 만들어줘야 매끄럽게 narrowing이 가능합니다.  -->
