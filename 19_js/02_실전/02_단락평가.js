// AND 단락평가

// function calcA() {
//   console.log("a");
//   return false;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// AND단락평가를 이용해 오류 방지하기
// function calcA() {
//   console.log("a");
//   return undefined;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// function getName(person) {
//   return person.name;
// }

// let person;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//   if (person !== undefined) {
//     return person.name;
//   } else {
//     return "매개변수가 객체가 아닙니다.";
//   }
// }

// let person;
// let name = getName(person);
// console.log(name);

// function getName(person) {
//   return person && person.name;
// }

// let person = {
//   name: "이정환",
// };

// let name1 = getName(undefined);
// let name2 = getName(null);
// let name3 = getName(person);

// console.log(name1);
// console.log(name2);
// console.log(name3);

// OR 단락평가
// function calcA() {
//   console.log("a");
//   return true;
// }

// function calcB() {
//   console.log("b");
//   return false;
// }

// console.log(calcA() || calcB());

const name = "이정환" || undefined;
console.log(name);