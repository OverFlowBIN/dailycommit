// narrowing의 다른 방법
// typeof로 안되는 경우
// null & undefined 타입체크하는경우가 매우 잦음
function func1(a) {
    if (a && typeof a === "string") {
        return "not undefined";
    }
}
function func2(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
// instanceof => object narrowing 가능
// 오브젝트 instanceof 부모class
let date = new Date();
if (date instanceof Date) {
}
function func3(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car타입이다.");
    }
}
