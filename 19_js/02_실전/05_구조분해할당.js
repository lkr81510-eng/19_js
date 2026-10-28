// let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

// let arr = [1, 2, 3];
// let [one, two, three] = arr;
// console.log(one, two, three);

// let arr = [1, 2, 3];
// let [one, two] = arr;
// console.log(one, two);

// let arr = [1, 2];
// let [one, two, three] = arr;
// console.log(one, two, three);

// let person = {
//   names: "이정환",
//   age: 25,
//   locations: "경기도",
// };

// let { names, age, locations } = person;

// console.log(names, age, locations);

// function func({ names, age, locations }) {
//   // let { names, age, locations } = person;
//   console.log(names, age, locations);
// }

// let person = {
//   names: "이정환",
//   age: 25,
//   locations: "경기도",
// };

// func(person);

function func({ names: n, age: a, locations: l }) {
  console.log(n, a, l);
}

let person = {
  names: "이정환",
  age: 25,
  locations: "경기도",
};

func(person);