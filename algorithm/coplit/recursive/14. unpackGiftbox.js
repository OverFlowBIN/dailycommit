// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

function unpackGiftbox(box, gift) {
  for (el of box) {
    if (el === gift) return true;
    else if (Array.isArray(el)) {
      return unpackGiftbox(el, gift);
    }
  }

  return false;
}

const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true
