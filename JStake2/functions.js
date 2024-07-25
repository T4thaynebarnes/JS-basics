// placing html elements in variables
let tipAmountBoard = document.querySelector("#tip");
let foodBill = document.querySelector("#foodBill");
let totalBillAmount = document.querySelector("#totalAmount");
let nameDisplay = document.querySelector("#nameDisplay");
let sumDisplay = document.querySelector("#sum");
let subDisplay = document.querySelector("#sub");
// es6 arrow function ass user for the information to calculate a tip and a total
const handleCalculator = () => {
  let brewTotal = Number(prompt("how much was the 🍻tab?"));
  let tipPercentage = Number(
    prompt("what percentage do you want to tip?") / 100
  );
  let tipAmount = brewTotal * tipPercentage;
  let total = tipAmount + brewTotal;
  if (total > 0) {
    console.log(total);
    //without .toFixed(2) it would display the infinite .remainders of the decimal
    tipAmountBoard.innerText = tipAmount.toFixed(2);
    foodBill.innerText = brewTotal.toFixed(2);
    totalBillAmount.innerText = total.toFixed(2);
    console.log((totalBillAmount.innerText = total.toFixed(2)));
  }
};

const handleNames = () => {
  let userName = prompt("what's your name?");
  nameDisplay.innerText = userName;
};

const handleSum = () => {
  let addend1 = Number(prompt("what's the first number you want to add"));
  let addend2 = Number(
    prompt("what is the second number you want to add to it?")
  );
  let sum = addend1 + addend2;
  sumDisplay.innerText = sum;
  return addend1 + addend2;
};

const handleSub = (a, b) => {
  console.log("a: ", a, "B: ", b);
  subDisplay.innerText = a - b;
  return a - b;
};
