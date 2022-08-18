let 이름 :string = "김영빈";
let stringOrNumber :NameType = 123;
type NameType = string | number;  // 타입명을 보통 대문자로 시작

let arr :string[] = ['asd', 'asd'];

let obj :{ name : string} = { name : "kim" };

function func(x :number): number {  // 다음 함수는 파마리터, return값으로 number만 받을 수 있음
  return x + 2
}

const func2 = (x :number) :number => {
  return x * 2
}

let output1 = func(1);
console.log(output1)
let output2 = func2(3);
console.log(output2)

// array tuple Type
type Member = [number, boolean];
let john :Member = [123, true];

// obj Type
type MemberObj = {
  [key :string] : string  // 글자로 된 모든 obj속성의 타입은 : string
}
let yb :MemberObj = { 123 : 'kim'}
console.log(yb)
// TODO: 이건 왜 되는 거지????
// type MemberObj = {
//   [key :number] : string  
// }

// class 문법
class User {
  name :string; 
  constructor(name :string){
    this.name = name;
  }
}