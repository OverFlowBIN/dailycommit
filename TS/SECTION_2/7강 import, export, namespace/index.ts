// // type import, export 다른 파일에 있는 타입 가져오기
import { Car, Bike, 이름, Name as na } from "./a.js";

console.log(이름);

let 변수: na = "park";

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
// (index.ts)

let car: Car = {
  wheel: 4,
  model: "santafe",
};
console.log("car", car);

let bike: Bike = {
  wheel: 2,
  model: "ybBike",
};
console.log("bike", bike);

// index.ts에 만들어놨는데 더러워서 다른 파일로 옮겨서 사용하고 싶습니다.

// 빨리 위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보십시오.
