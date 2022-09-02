// 난수 생성하기
// Math.floor() 함수는 소수점 1번째 자리를 버림하여 정수를 리턴하는 함수
const randomNumber = Math.floor(Math.random() * 20);

// console.log(randomNumber);

function Numbertest() {
  if (randomNumber < 10) {
    console.log("under");
  } else {
    console.log("over");
  }
}

console.log(Numbertest());

// Advanced
const inputData = [Math.floor(Math.random() * 20)];
console.log(inputData);

function objectData(first, second, third) {
  this.a = first;
  this.b = second;
  this.c = third;
}

const arry1 = [];
for (let i = 0; i < 5; i++) {
  console.log(inputData[i]);

  arry1.push(new objectData(inputData, inputData, inputData));
}

console.log(arry1);
