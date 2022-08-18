// 문제
// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼
// (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// pesudocode
// 알파벳 전체를 하나의 변수에 담는다.
// 반복문으로 str를 검토해서 해당 요소(알파벳1개)가 알파벳전체에 몇번째 인덱스인지 확인한다.
// 확인한 인덱스 보다 secret 만큼 왼쪽에(-) 위치한 알파벳을 result에 담는다

// solve.1
function decryptCaesarCipher(str, secret) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i];
    } else {
      let idx = alphabet.indexOf(str[i]);
      if (idx - secret < 0) result += alphabet[alphabet.length + idx - secret];
      else result += alphabet[idx - secret];
    }
  }
  return result;
}

// solve.2
function decryptCaesarCipher(str, secret) {
  // 알파벳
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // 공백은 그대로 둔다.
      result = result + " ";
    } else {
      // 현재 문자의 알파벳 순서를 구한다.
      let asis = alpha.indexOf(str[i]);
      // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
      let tobe = (asis - secret + alpha.length) % alpha.length;
      result = result + alpha[tobe];
    }
  }

  return result;
}

// solve.3
function decryptCaesarCipher(str, secret) {
  let spell = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (spell.indexOf(str[i]) - secret < 0)
        result += spell[spell.indexOf(str[i]) - secret + 26];
      else {
        result += spell[spell.indexOf(str[i]) - secret];
      }
    } else result += " ";
  }

  return result;
}

// 입출력 예시
let output = decryptCaesarCipher("nzop delepd dfaazced jzf", 11);
console.log(output); // --> 'code states supports you'

output = decryptCaesarCipher("zruog", 3);
console.log(output); // --> world
