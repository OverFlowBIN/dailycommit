// narrowing의 다른 방법
// typeof로 안되는 경우

// null & undefined 타입체크하는경우가 매우 잦음
function func1(a: string | undefined) {
  if (a && typeof a === "string") {
    return "not undefined";
  }
}

// in keyword
type Fish = { swim: string };
type Bird = { fly: string };

function func2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// instanceof => object narrowing 가능
// 오브젝트 instanceof 부모class
let date = new Date();
if (date instanceof Date) {
}

// 비슷한 오브젝트 타입을 narrowing 할떄
// 강제로 literal type을 만들어 둔다
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
function func3(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이다.");
  }
}
