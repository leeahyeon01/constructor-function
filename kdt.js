//객체를 직접 만드는 것 x
//객체의 '틀'을 만드는 과정: 생성자 함수!
// 인스턴스 = 틀로 찍어낸것
function kdt(name, glass, payment) {
  this.id = name;
  this.b = glass;
  this.c = payment;

}

// ahyeon 이라는 객체 만들기
const ahyeon = new kdt("슈크림", "김치", "소주");
console.log(ahyeon);

// members 이라는 객체화
const members = [];
for (let i = 0; i < 6; i++) {
  members.push(new kdt(i, "hello", "bye"));
}

console.log(members);

// 객체를 -> 모듈화 해주었다
export default function kdt(name, glass, payment) {
  this.id = name;
  this.b = glass;
  this.c = payment; 
  this.fun = function ();
}
