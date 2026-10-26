// 파이썬
// for 변수 in 객체(iterable):
//     실행할 명령

// for(초기식; 조건식; 증감식){
//     실행할 명령
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(`hello js ${i}`);
// }

// break 반복문 종료
// for (let idx = 1; idx <= 100; idx++) {
//   if (idx > 10) {
//     console.log("반복문 종료!");
//     break;
//   }
//   console.log(idx);
// }

// continue 건너뛰기
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
}
 