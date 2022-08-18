// interface : object 타입 설정 방법 중 하나
// type 대신 interface로 사용 가능
// extends로 복사 가능
var sqaure = { color: "red", width: 100 };
;
// Student의 타입설정을 Teacher에 복붙 해주세요~
var student = { name: "kim" };
var teacher = { name: "kim", age: 20 };
;
; // => 자동으로 두개의 타입을 합쳐준다
var 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
};
var 장바구니1 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
var 장바구니2 = [
    { product: '청소기', price: 7000, card: false }
];
var object = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
