
// 재귀 함수 : 재귀적 사고방식을 활용할 수 있게 자기 자신을 호출할 수 있게 만든 함수

function sumTo(num) {
	// 1. 재귀함수의 입력갑과 출력갑 정의하기
		// sumTo: [num] => num
		// sumTo: num을 입력받아 num까지의 합을 구한다.

	// 2. 문제를 쪼개고 경우의 수 나누기
		// 1 + 2 + 3 + 4 + 5 === sumTo(5)
			// sumTo(4) + 5 === sumTo(5)
		// 1 + 2 + 3 + 4 === sumTo(4)
			// sumTo(3) + 4 === sumTo(4)
		// 1 + 2 + 3 === sumTo(3)
			// sumTo(2) + 3 === sumTo(3)
		// 1 + 2  === sumTo(2)
			// sumTo(1) + 2 === sumTo(2)
		// 1  === sumTo(1)

	// 3. base case
		// 문제를 쪼갤 수 없는 경우 => 재귀함수의 탈출조건
		// 1부터 1까지 더할 수 있는 방법은 없다.
		// sumTo(1) === 1

	// 4. recursive case
		// sumTo(n-1) + n === sumTo(n)

	// 5. 코드 구현하기

		if (num <= 1) return num;

		return sumTo(num - 1) + num
}

console.log(sumTo(5))



// unpackGiftbox

function unpackGiftbox(giftBox, wish) {

	// 1. 재귀 함수의 입력값과 출력값 정의하기
	// unpackGiftbox: ([], wish) => boolean
	// 받고 싶은 선물?
		// 선물상자 / 선물
		// 선물상자에 선물이 몇 개 있다.
		// [1, 2, ['macbook', 'iphone', 'mouse'], 4, 5]
			// 선물상자 몇번 열아야하나? -> 2번 열어야함 -> 똑같은 행동이 반복됨

	// 2. 문제를 쪼개고 경우의 수 나누기
		// 선물인 경우
			// 내가 원하는 선물안지
			// 원하지 않는 선물인지
		// 선물상자인 경우
			// 재귀(다시 선물상자 열기)


	for(let i = 0; i < giftBox.length; i++) {
		// 선물상자인 겨웅
		if(Array.isArray(giftBox[i])) {
			// return되는 결과값(true, false) 저장해두기
			let isWish = unpackGiftbox(giftBox[i], wish)
			if(isWish) return true;
		}
		// 선물인 경우
		else if (giftBox[i] === wish) {
			return true;
		}
	}

	// 아무것도 리턴 안하면 undefined
	return false;

}


