// TypeScript로 HTML 다루기
// instanceof => 해당 요소가 맞나?

// let title = document.querySelector("#title");
// if(title instanceof Element) {
//   title.innerHTML = "반가워요1"
// }

let title2 = document.querySelector("#title");
if(title2?.innerHTML) {
  title2.innerHTML = "반가워요!!"
}

// 링크 바꾸기
let link = document.querySelector(".link");
if(link instanceof HTMLAnchorElement) {
  link.href = "http://kakao.com"
}

// 타입스크립트에서 제공하는 기본 element 타입이 있는데
// HTMLAnchorElement
// HTMLButtonElement
// HTMLCanvasElement 등등이 있다.


// EventListener
// 내가 찾은 button이 html button element가 맞는지 narrowing이 필요하다.
let button = document.querySelector("#button");
button?.addEventListener("click", () => {  // button? => 버튼에 addEventListener 가능하면 해주고 아니면 undefined 하셈!(narrowing 인정)
  let img = document.querySelector("#image");
  if(img instanceof HTMLImageElement) {
    if(img.src === "https://media.vlpt.us/images/ehdus403/post/5033856c-573f-4a91-b005-3c7ea29bdbba/js.png") {
      img.src = 'https://media.vlpt.us/images/cjh951114/post/dcedbd85-a3ef-4add-8280-136c6a3d35b5/typescript_logo.png'
    } else {
      img.src = 'https://media.vlpt.us/images/ehdus403/post/5033856c-573f-4a91-b005-3c7ea29bdbba/js.png'
    } 
  }
})






// TODO: (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?

// 위에 품



// TODO: (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a> 
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.

const naverLinks = document.querySelectorAll(".naver");
console.log('naverLinks', naverLinks)
naverLinks.forEach((link) => {
  if(link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com"
  }
})




