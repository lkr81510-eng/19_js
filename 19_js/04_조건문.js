// 조건문
// if(조건식){
//     조건식이 참일때 수행할 명령
// }

// if 조건식:
//    조건식이 참일때 수행할 명령

// let num = 11;

// if (num >= 10) {
//     console.log("num은 10이상입니다.");
// }

// if(조건식){
//     참일때 수행할 코드
// }
// else{
//     거짓일때 수행할 코드
// }

// let num = 9;

// if (num >= 10) {
//   console.log("조건일치");
//   console.log("num은 10 이상입니다");
// } else {
//   console.log("조건불일치");
//   console.log("num은 10 보다 작습니다");
// }

// if num >= 10:
//     print("num은 10이상입니다")
// elif num >= 5:
//     print("num은 5이상입니다")
// else:
//     print("num은 5미만입니다")

// let num = 5;

// if (num >= 10) {
//   console.log("num은 10이상입니다.");
// } else if (num >= 5) {
//   console.log("num은 5이상입니다.");
// } else {
//   console.log("5미만입니다.");
// }

// switch문
let fruit = "apple";

switch (fruit) {
  case "apple": {
    console.log("사과");
    break;
  }
  case "banana":
    {
      console.log("바나나");
      break;
    }
    defalut: {
      console.log("우리가 찾는 과일이 아님");
    }
}