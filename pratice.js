//객체의 틀을 만드는 과정 : 생성자 함수 !!
// 인스턴스 = 틀로 찍어낸것

// import kdt from "./kdt";

// kdt("공욱재", "씀", "3억");

// console.log(kdt());

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

console.log(students.textContent);

// Q.1 studnets의 id, name 찍어주기
const kdtlist = [];
function studentlist(id, name) {
  this.id = id;
  this.name = name;
}

for (let i = 0; i < students.length; i++) {
  kdtlist.push(new studentlist(i, students[i]));
  console.log(kdtlist);
}
