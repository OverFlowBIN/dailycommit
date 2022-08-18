let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true;
let 뭐뭐했니: null = null;
let 회원들: string[] = ["kim", "park"];
let 회원들정보: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 자동으로 타입 정해줌
let 성별 = "남";
let 회원들3 = [1, 2, 3];

// 문제
let project: {
  member: string[];
  days: number;
  started: boolean;
  items: { idx: number; content: string; count: number }[];
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
  items: [
    { idx: 1, content: "짜장면", count: 0 },
    { idx: 2, content: "짬뽕", count: 0 },
  ],
};
