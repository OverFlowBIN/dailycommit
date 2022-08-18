// 'Hello HoF!' 리턴하는 함수를 리턴해야 합니다

const returnFunction = () => {
  return function fn() {
    return "Hello HoF!";
  };
};

let output = returnFunction();
console.log(output()); // --> 'Hello HoF!'
