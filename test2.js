const swap = (a, b) => {
  console.log(`a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`after swap => a = ${a}, b = ${b}`);
};

swap(2, 3);
