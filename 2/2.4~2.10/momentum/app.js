// // 2.4
// const amIFat = null;
// let something;
// console.log(amIFat);
// console.log(something);

// // 2.5
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // Get Item from Array
// console.log(daysOfWeek[5]);

// // Add one more day to the array
// daysOfWeek.push("free");
// console.log(daysOfWeek);

// // 2.6
// const player = {
//   name: "heymin",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// // peoperty 값을 가져오는 두가지방법
// console.log(player.name);
// console.log(player["name"]);
// // peoperty 값을 업데이트하는 방법
// player.fat = false;
// player.ponints = player.points + 15;
// console.log(player);
// // peoperty 값을 추가하는 방법
// player.lastname = "potato";
// console.log(player);

// // 2.7
// function sayHello(nameOfPerson, age) {
//   console.log("hello my name is " + nameOfPerson + " and i'm " + age);
// }
// // function 실행하는 방법
// sayHello("hyemin", 10);
// sayHello("mina", 12);
// // 예시
// function plus(a, b) {
//   console.log(a, b);
//   console.log(a + b);
// }
// function divide(a, b) {
//   console.log(a / b);
// }
// plus(8, 60);
// divide(50, 5);

// const player = {
//   name: "hyemin",
//   sayHello: function (name) {
//     console.log("hello " + name);
//   },
// };
// console.log(player.name);
// player.sayHello("shm");
// player.sayHello("min");

// 2.10
const carculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  square: function (a, b) {
    console.log(a ** b);
  },
};

carculator.add(10, 2);
carculator.minus(0, 2);
carculator.div(0, 50);
carculator.multi(2, 2);
carculator.square(55, 2);
