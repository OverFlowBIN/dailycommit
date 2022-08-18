// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

function findMatryoshka(matryoshka, num) {
  if (matryoshka.size === num) {
    if (matryoshka.matryoshka) return true;
    else return false;
  }

  if (matryoshka.size > num && matryoshka.matryoshka === null) return false;

  return findMatryoshka(matryoshka.matryoshka, num);
}

// reference code
// function findMatryoshka(matryoshka, size) {
//   // recursive case
//   if (matryoshka.size === size) {
//     return true;
//   } else if (matryoshka.matryoshka && matryoshka.size > size) {
//     return findMatryoshka(matryoshka.matryoshka, size);
//   }

//   // base case
//   return false;
// }

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: {
      size: 8,
      matryoshka: null,
    },
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
