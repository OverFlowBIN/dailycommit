// const inequalityNumber = function (signs) {
//   // TODO: 여기에 코드를 작성합니다.
//   let tempMax = '';
//   let tempMin = '';

//   // MAX
//   function max(signs) {
//     let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let count1 = 0;
//     for(let i = 0; i < signs.length; i++) {
//       if(signs[i] === '<') {
//         count1++;
//       }
//     }

//     let start = num[num.length - 1 - count1];
//     // console.log('max start', start)
//     let startIdx = num.indexOf(start);
//     // console.log('max stasrtIdx', startIdx)

//     if(tempMax === '' && signs[0] === '>') {
//       tempMax = num.pop()
//       // console.log('start tempMax', tempMax)
//     } else {
//       tempMax = start;
//     }
    

//     let count2 = 0;
//                 // 6(9-3) < 7(9-2) > 5(6-1) > 4(6-2) < 8(9-1) < 9(9-0) -> 675489  <>><<
//     for(let i = 0; i < signs.length; i++) {
      
//         if(signs[i] === '<') {
//           count1--;
//           tempMax += num[num.length - 1 - count1];
//         } else if(signs[i] === '>') {
//           count2++;
//           tempMax += num[startIdx - count2];
//         }
      
      
//       console.log('MAX', tempMax)
//     }
//     return tempMax;
//   }


//     // Min
//     function min(signs) {
//       let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//       let count1 = 0;
//       for(let i = 0; i < signs.length; i++) {
//         if(signs[i] === '>') {
//           count1++;
//         } else if (signs[i] === '<') {
//           break;
//         }
//       }
  
//       let start = num[count1];
//       console.log('min start', start)
//       let startIdx = num.indexOf(start);
//       console.log('min stasrtIdx', startIdx)
      
//       if(tempMin === '' && signs[0] === '<') {
//         tempMin = num.shift();
//         console.log('start tempMin', tempMin)
//       } else {
//         tempMin = start;
//       }


//       let count2 = 0;
//       for(let i = 0; i < signs.length; i++) {
        
//           if(signs[i] === '>' && count1 > 0) {
//             count1--;
//             tempMin += num[count1];
//           } else if(signs[i] === '<') {
//             count2++;
//             tempMin += num[startIdx + count2];
//           }
        
//         console.log('MIN', tempMin)
//       }
//       return tempMin;
//     }  

//   return max(signs) - min(signs);

// };



const getMaxNumber = (signs) => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let max = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '>') {
      max += String(num.pop())
    } else if (signs[i] === '<') {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '<') count++
        else break
      }
      max += String(num.splice(num.length - 1 - count, 1))
    }
  }
  max += num.pop()
  return max
}

const getMinNumber = (signs) => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let min = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '<') {
      min += String(num.shift())
    } else if (signs[i] === '>'){
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '>') count++
        else break
      }
      min += String(num.splice(count, 1))
    }
  }
  min += num.shift()
  return min
}

function inequalityNumber (signs) {
  return getMaxNumber(signs) - getMinNumber(signs)
}



let output = inequalityNumber('<');
console.log(output); // --> 88 (89 - 01)
console.log('-----------------------------------------------------')

output = inequalityNumber('< >');
console.log(output); // --> 876 (897 - 021)
console.log('-----------------------------------------------------')

output = inequalityNumber('> < >');
console.log(output); // --> 8,754 (9,786 - 1,032)
console.log('-----------------------------------------------------')
