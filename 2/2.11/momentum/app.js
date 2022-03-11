// const age = 97;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// const age = 97;
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2;
//   return "hello";
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

const calcultor = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
};

const pluseResult = calcultor.plus(2, 3);
const minusResult = calcultor.minus(pluseResult, 10);
const divResult = calcultor.div(10, minusResult);
console.log(pluseResult);
console.log(minusResult);
console.log(divResult);
