// 함수선언
// def 함수명():
//     수행할 코드
// 함수명()

// function 함수명(){
//     수행할 코드
// }
// 함수명()

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("함수 시작 전");
// greeting();
// console.log("함수 종료");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// getArea();

// function getArea(width, height) {
//   let area = width * height;
//   console.log(area);
// }

// getArea(100, 200);

// 함수 반환
// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }

// let result = getArea(10, 20);
// console.log(result);

// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료");
// }

// let result = getArea(10, 20);
// console.log(result);

// 중첩함수
// function greeting() {
//   function greetingWithName(name) {
//     console.log(`hello! ${name}`);
//   }

//   let name = "이정환";
//   greetingWithName(name);
// }

// greeting();

// 함수와 호이스팅

// func();

// function greeting() {
//   console.log("hello");
// }

// 함수 표현식

// let greeting = function () {
//   console.log("hello");
// };

// greeting();

// function greetFunc() {
//   console.log("hello");
// }

// let greeting = greetFunc;
// greeting();

// console.log(parseInt("10"));

// 콜백함수
// function parentFunction(callBack) {
//   //   let callBack = childFunc
//   console.log("parent");
//   callBack();
// }

// function childFunc() {
//   console.log("child");
// }

// parentFunction(childFunc);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// repeat(5);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }

// repeatDouble(5);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }

// repeat(5, origin);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }

// function double(count) {
//   console.log(count * 2);
// }

// repeat(5, double);

// 화살표 함수
// let funcA = (매개변수) =>  { 수행할 코드 }

// let greeting = (name) => `hello ${name}`;

// const greetingText = greeting("이정환");

// console.log(greetingText);

let isConfirm = false;

function confirm(onYes, onNo) {
  //   let onYes = () => console.log("승인")
  if (isConfirm) onYes();
  else onNo();
}

confirm(
  () => console.log("승인"),
  () => console.log("거부"),
);

// if (isConfirm) {
//   onYes();
// } else {
//   onNo();
// }
