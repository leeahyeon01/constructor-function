const students = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연",
];
console.log("aaa");
console.dir(students.textContent);
const newstudent = [];

// Q.1 studnets의 id, name 찍어주기
for (let i = 0; i < students.length; i++) {
  newstudent.push(new PP(i, students[i]));
}
console.log(newstudent);

//Q.2 students의 '김씨'성만 출력하기
console.log(students[0][0]);
let poketmon = [];
let indexCount = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i][0] === "김") {
    // poketmon = students[i][0].textContent = "피카츄";
    poketmon[indexCount] = students[i];

    indexCount = indexCount + 1;
    // console.dir(students[i]);
  }
}
console.log(poketmon);

//Q.3 students의 '김씨'를 피카츄로 바꿔주기
function findKim() {
  for (let i = 0; i < students.length; i++) {
    if (students[i][0] === "김") {
      students[i] = "피카츄";
    }

    console.log(students);
  }
}

console.log(findKim());

// Q.4 우리반에 가장많은 성씨는?

// 문자열의 인덱스 번호찾기
