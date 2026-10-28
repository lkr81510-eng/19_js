// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food);
// console.log(newLength);

// let a = 1;
// console.log(console.log(a));

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육", "라자냐");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.pop();

// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.unshift("갈비찜");
// console.log(food);
// console.log(newLength);

// Array.slice(start, end);
// let arr = [1, 2, 3];
// const sliced = arr.slice(0, 2);
// console.log(sliced);

// let arr = [1, 2, 3];
// console.log(arr[2]);
// // console.log(arr[-1]);
// console.log(arr.slice(2));
// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));

// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);

// console.log(arrC);

// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);
// arrA.pop();

// let food = ["짜장면", "피자", "치킨", "탕수육"];
// let item = food.splice();

// console.log(item);
// console.log(food);

// function cb(item, index, array) {
//   // 수행할 코드
// }

// arr.forEach(cb)

// function cb(item) {
//   console.log(` ${item}`);
// }

// const arr = [1, 2, 3];

// arr.forEach(cb);

// arr.indexOf(item, fromIndex)

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(1, -2));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(7, 9));
// console.log(arr.indexOf("3"));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.includes(3));
// console.log(arr.includes("생선"));

// function datemine(item, idx, arr) {
// //   console.log(item);
// //   console.log(idx);
// //   console.log(arr);
//     if (item % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
// }

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(datemine);

// console.log(index);

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex((item) => (item % 2 == 0 ? true : false));
// console.log(index);

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// let index = arr.findIndex((item) => {
//   console.log(item);
//   return item.name === "이정환";
// });

// console.log(index);

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// let element = arr.find((item) => item.name === "이정환");
// console.log(element);

// let arr = [
//   { name: "이종원", hobby: "축구" },
//   { name: "이정환", hobby: "영화" },
//   { name: "신다민", hobby: "축구" },
//   { name: "김효빈", hobby: "노래" },
// ];

// let filtered = arr.filter((item) => item.hobby === "축구");

// console.log(filtered);

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((item) => item * 3);
// console.log(newArr);

// let arr =["b", "a", "c"];
// arr.sort();
// console.log(arr);

// let arr = ["안녕", "나는", "이정환"];
// console.log(arr.join())
// console.log(arr.join("-"))

// let arr = [1,2,3,4,5]
// let result = arr.reduce((acc, item) =>acc + item, 0);
// console.log(result);