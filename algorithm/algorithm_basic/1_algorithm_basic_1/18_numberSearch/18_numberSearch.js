// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 
// 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 한다. (빈문자의 경우 0을 리턴)



// sovle.1
function numberSearch(str) {
  if(str.length === 0) return 0;
  let len = 0;
  let sum = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ' && isNaN(str[i])) len++;
    if(!isNaN(str[i] || str[i] !== ' ')) sum += +str[i];
    console.log('sum :', sum, 'len :', len)
  }
  // console.log(len, sum)
  return Math.round(sum / len);
}



// solve.2
function numberSearch(str) {
  const digits = '0123456789';

  if (str === '') {
    return 0;
  }

  let sum = 0;
  let pureStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== ' ') {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}



// 입출력 예시
let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2