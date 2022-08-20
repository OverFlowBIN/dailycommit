// 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다

const calculateScore = (arr, animal) => {
  return arr.reduce((acc, cur) => {
    if (cur.animal === animal) return acc + cur.score;
    return acc;
  }, 0);
};

const records = [
  {
    score: 63,
    animal: "dog",
  },
  {
    score: 75,
    animal: "dog",
  },
  {
    score: 87,
    animal: "cat",
  },
  {
    score: 98,
    animal: "cat",
  },
  {
    score: 24,
    animal: "dog",
  },
];

let output = calculateScore(records, "cat");
console.log(output); // --> 185

output = calculateScore(records, "dog");
console.log(output); // --> 162

output = calculateScore([], "dog");
console.log(output); // --> 0
