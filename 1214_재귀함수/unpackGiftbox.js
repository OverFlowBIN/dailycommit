function unpackGiftbox(giftBox, wish) {
  // recursive case
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) {
        return true;
      }
    }
  }

  // base case
  return false;
}

// 다른 풀이 방법 1
// function unpackGiftbox(giftBox, wish) {
//   // recursive case
//   let anotherBoxes = [];
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) {
//       return true;
//     } else if (Array.isArray(giftBox[i])) {
//       anotherBoxes = anotherBoxes.concat(giftBox[i]);
//     }
//   }

//   if (anotherBoxes.length > 0) {
//     return unpackGiftbox(anotherBoxes, wish);
//   }

//   // base case
//   return false;
// }

// 다른 풀이 방법 2
// function unpackGiftbox(giftBox, wish) {
//   const result = giftBox.reduce((acc, curr) => {
//     if (curr === wish) {
//       return true;
//     } else if (Array.isArray(curr)) {
//       return unpackGiftbox(curr, wish) || acc;
//     } else {
//       return acc;
//     }
//   }, false);
//   return result;
// }

console.log(typeof(123) === 'number')
console.log([].concat(1))
console.log([].push(1))
