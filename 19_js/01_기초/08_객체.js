// 객체 생성과 프로퍼티

// let objA = {}
// let objB = new Object()

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30,
// };

// console.log(person);

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// console.log(person.name);
// console.log(person["name"]);
// console.log(person["like cat"]);

// 프로퍼티 추가

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// person.gender = "male";
// person["nickname"] = "winderlood";

// console.log(person);

// 프로퍼티 수정
// let cat = {
//   name: "치삼이",
//   age: 4,
// };

// cat.name = "치삼";
// cat["age"] = 5;

// console.log(cat);

// 프로퍼티 삭제

// let cat = {
//   name: "치삼이",
//   age: 4,
// };

// delete cat.name;
// delete cat["age"];

// console.log(cat);

// const obj = {
//   a: 1,
//   b: "text",
// };

// obj.a = 2;
// obj.c = undefined;

// console.log(obj);

// //  in연산자
// let obj = {
//   a: 1,
// };

// // console.log(obj.b);
// let isPropertyExist = obj.b !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// };

// let isNameExist = "name" in person;
// console.log(isNameExist);

// 매서드
let person = {
  name: "이정환",
  sayHi: function () {
    // => () => console.log("안녕")
    console.log("안녕");
  },
};

person.sayHi();

