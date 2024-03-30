// function tipCalculator() {
//   food = Number(prompt("how much was the food?"));
//   tipPercentage = Number(prompt("tip %?")) / 100;
//   tipAmount = food * tipPercentage;
//   total = food + tipAmount;

//   console.log("tip amount: ", tipAmount);
//   console.log("total: ", total);
//   alert(tipAmount);
// }
// a different way to write the same function just apssing
// in arguments and returning the result
function tipCalculator2(cost, tip) {
  let tipPercentage = tip / 100;
  let tipAmount = cost * tipPercentage;
  //   reusing sum() we built below
  let total = sumArrow2(cost, tipAmount);
  console.log(total);
  return total;
}

function sum(a, b) {
  return a + b;
}
// ES6 arrow functions
//  with curley brackets is a explicit return
const sumArrow = (a, b) => {
  return a + b;
};
// you can remove curley brackets if you like,
//  this is known as an implicit return
const sumArrow2 = (a, b) => a + b;
