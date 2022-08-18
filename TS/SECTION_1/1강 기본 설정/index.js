let 이름 = "김영빈";
let stringOrNumber = 123;
let arr = ['asd', 'asd'];
let obj = { name: "kim" };
function func(x) {
    return x + 2;
}
const func2 = (x) => {
    return x * 2;
};
let output1 = func(1);
console.log(output1);
let output2 = func2(3);
console.log(output2);
let john = [123, true];
let yb = { 123: 'kim' };
console.log(yb);
// TODO: 이건 왜 되는 거지????
// type MemberObj = {
//   [key :number] : string  
// }
// class 문법
class User {
    constructor(name) {
        this.name = name;
    }
}
