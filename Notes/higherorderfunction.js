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
// const filterNums = [1, 2, 3, 4, 5, 6];
// // this will return
// console.log(
//   "filterNums practice with filter: ",
//   filterNums.filter((num) => num > 4 && num < 2)
// );

// const actors = [
//   { name: "your mom", netWorth: 500 },
//   { name: "your dad", netWorth: 50 },
//   { name: "Thayne Barnes", netWorth: 20 },
//   { name: "summer Miller", netWorth: 700 },
//   { name: "Batman", netWorth: 400 },
//   { name: "deadpool", netWorth: 30 },
//   { name: "Pikachu", netWorth: 1000 },
//   { name: "Charmander", netWorth: 2000 },
//   { name: "Beaverballs", netWorth: 2 },
// ];
// // filtering thru and returning an array of objects
// console.log(
//   "peopel with a networth < 50",
//   actors.filter((actor) => actor.netWorth < 50)
// );
// console.log(
//   "people with a networth > 1000: ",
//   actors.filter((actor) => actor.netWorth > 1000)
// );
// console.log(
//   "people with networth of equal to or greater than 700",
//   actors.filter((actor) => actor.netWorth >= 700)
// );
// const displayOne = document.getElementById(displayDiv);

// displayOne.innerHTML = actors
//   .map((actor) => `<p>${actor.name}: ${actor.netWorth}</p>`)
//   .join(" ");

const actors = [
  { name: "johnny", netWorth: 2000000 },
  { name: "amber", netWorth: 10 },
  { name: "matt", netWorth: 170000000 },
  { name: "brad", netWorth: 300000000 },
  { name: "leonardo", netWorth: 10000000 },
];

let rslt = actors.filter((actor) => actor.netWorth > 10);
console.log(rslt);
let names = rslt.map((actor) => actor.name).join(", ");
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0));

actorlist.innerHTML = `<h1>${names}</h1>`;

const pokemonAPI = [
  {
    name: "Charmander",
    level: 5,
    type: "fire",
    image: "/Notes/assets/charmander.jpg",
  },
  {
    name: "Pikachu",
    level: 7,
    type: "electric",
    image: "/Notes/assets/pikachu.jpg",
  },
  { name: "Bulbasaur", level: 10, type: "grass" },
  { name: "Riachu", level: 11, type: "electric" },
  { name: "Vulpix", level: 20, type: "fire" },
  { name: "Ninetales", level: 19, type: "fire" },
];
// me practicing filter used it to filter by level any thing greater or equal to 19 will appear on the dom
// storing returned filter array in a variable
let reponse = Number(prompt("enter a level number?"));
let pokemonArray = pokemonAPI.filter((pokemon) => pokemon.level === reponse);
console.log(pokemonArray);
// storing the returned array from calling map on the filtered array results and joining them with a comma, displaying the name properties of the filtered results
let pokemonNames = pokemonArray.map((poke) => poke.name).join(", ");
let pokemonImages = pokemonArray
  .map((poke) => `<img src ="${poke.image}" alt="${poke.name}">`)
  .join(" ");
// targeting a div on my index.html file to inject the name properties of the results on the dom
pokeList.innerHTML = `<div><h1>${pokemonNames}</h1></div><img>${pokemonImages}</img>`;

// reduce - takes in a function as an argument hence the meaning of higherorder function
// loops thru and gives you back the accumulator
// this will return the sum of all the numbers in the array***
// const beavers = [1, 2, 3];
// const beaverResults = beavers.reduce(function (prev, curr) {
//   return prev + curr;
// });
// console.log(beaverResults);
// ************rewriting same anonymous function with es6 format below
// the array will should equal 9
const beavers = [1, 2, 3, 1, 1, 1];
const beaverResults = beavers.reduce((prev, curr) => prev + curr);
console.log("results of calling reduce on beaver array", beaverResults);
// creating an array
const shitts = [1, 2, 3, 4];
// creating a function to pass in as an argument ,
// this function multiplies each number as it loops thru
const shittballs = (a, b) => {
  return a * b;
};
// passing in shittballs function as an argument
const shittResults = shitts.reduce(shittballs);
// logging results of reduce being called on the array we created, answer should be 24
console.log(shittResults);
//**** using reduce to add up all the networths of these people */
const peopleArray = [
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
// the zero is the second argument being passed indicates it should start counting at zero, instead of adding the objects themselves
console.log(peopleArray.reduce((prev, curr) => prev + curr.netWorth, 0));
