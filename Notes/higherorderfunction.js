// higher order functions

// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// logic operators && and ||
// && - both conditions must be true for it to return
// || only one or the other condition must be true to return

// const actors = [
//   { name: "your mom", netWorth: 500 },
//   { name: "your dad", netWorth: 50 },
//   { name: "Thayne Barnes", netWorth: 20 },
//   { name: "summer Miller", netWorth: 700 },
//   { name: "Batman", netWorth: 400 },
// ];
// ***************
// calling filter method on this array of object to loop thru it and return
// anyone who has a networth fo greater than 50
// ********************
// console.log(
//   "calling filter on actors array",

//   actors.filter((actor) => actor.netWorth < 30),
//   "   actors array",
//   actors
// );

// the higher order function map returns an array
// example:

// let something = [1, 2, 3, 4, 5, 6];

// const handleEvenNumbers = (beaverballs) => {
//   return beaverballs.map((number) => number * 2);
// };

// console.log(handleEvenNumbers(something));

// this is a manual way to write filter
// const testFilter = (numbers, greaterThan) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number);
//     }
//   }
//   return result;
// };
// console.log(filter([1, 2, 3, 4, 5, 6], 3));
// SAME FUNCTION JUST USING FILTER
const filterNums = [1, 2, 3, 4, 5, 6];
// this will return
console.log(
  "filterNums practice with filter: ",
  filterNums.filter((num) => num > 4 && num < 2)
);

const actors = [
  { name: "your mom", netWorth: 500 },
  { name: "your dad", netWorth: 50 },
  { name: "Thayne Barnes", netWorth: 20 },
  { name: "summer Miller", netWorth: 700 },
  { name: "Batman", netWorth: 400 },
  { name: "deadpool", netWorth: 30 },
  { name: "Pikachu", netWorth: 1000 },
  { name: "Charmander", netWorth: 2000 },
  { name: "Beaverballs", netWorth: 2 },
];
// filtering thru and returning an array of objects
console.log(
  "peopel with a networth < 50",
  actors.filter((actor) => actor.netWorth < 50)
);
console.log(
  "people with a networth > 1000: ",
  actors.filter((actor) => actor.netWorth > 1000)
);
console.log(
  "people with networth of equal to or greater than 700",
  actors.filter((actor) => actor.netWorth >= 700)
);
const displayOne = document.getElementById(displayDiv);

displayOne.innerHTML = actors
  .map((actor) => `<p>${actor.name}: ${actor.netWorth}</p>`)
  .join(" ");
