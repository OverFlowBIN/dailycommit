// 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.

const classicMovies = (arr, year) => {
  return arr
    .filter((el) => el.year < year)
    .map((el) => el.title + " by " + el.director);
};

let output = classicMovies(
  [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6,
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0,
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4,
    },
  ],
  1993
);

console.log(output); // --> ["Batman by Tim Burton", "Batman Returns by Tim Burton"]
