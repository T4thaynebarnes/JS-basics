/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => {
  return a + b;
};
console.log("add", add(5, 5));

const subzero = (a, b) => {
  return a - b;
};
console.log("subtract", subzero(10, 5));

const divide = (a, b) => {
  return a / b;
};
console.log("division", divide(10, 2));

const multiply = (a, b) => {
  return a * b;
};
console.log("multiply: ", multiply(5, 2));
