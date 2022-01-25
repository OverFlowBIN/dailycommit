// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.


// solve.1
function letterCapitalize(str) {
  let arr = str.split(' ');

  // for(let el of arr) {
  //   el = el[0].toUpperCase() + el.slice(1)
  // }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
  }

  return arr.join(' ');
}


// solve.2
function letterCapitalize(str) {
  if(str === '') return ''
  
  let arr = str.split(' ');
  // ['hello', 'world']
  
  let result = arr.map(el => {
    if(el === '') {
      return;
    }
    let inner = el.split('');
    inner[0] = inner[0].toUpperCase();
    let result = inner.join('')
    return result;
  })
  
  return result.join(' ');
}


// 입출력 예시
let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "