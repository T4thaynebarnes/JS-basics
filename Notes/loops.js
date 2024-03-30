let items = ["🫐", "⚒️", "⚔️", "🥷"];
items.push("🛡️", "🍾");
console.log(items);
// for loop to this is the old way of doing it
for (let i = 0; i < items.length; i++) {
  console.log(
    "result of for loop: looping thru each of these items",
    i,
    items[i]
  );
}
// new JS way to do a for loop
let samenameasarray = ["🫐", "⚒️", "⚔️", "🥷"];
for (const namewhatever of samenameasarray) {
  console.log(namewhatever);
}
// sum up number in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (const number of numbers) {
  // times 2 for each number & pushing the  numbers array to result array
  result.push(number * 2);
}
console.log("value of result array after push: ", result);
// excercise double numbers
const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const figure of figures) {
  // you can place logic inside of log.
  console.log("doubling numbers in the same array", figure * 2);
}
// putting for loop into a function
// this function takes an argument of an array with 12345 in it,
// then times each of them by 2  and pushes the result of each
// to the array known as value
const double = (digits) => {
  let value = [];
  for (const digit of digits) {
    value.push(digit * 2);
  }
  return value;
};
console.log("this logs double function", double([1, 2, 3, 4, 5]));
// practice  squared numbers using exponents
const squared = (things) => {
  let array = [];
  for (const thing of things) {
    array.push(thing ** 2);
  }
  return array;
};
console.log(
  "this logs squared it is the square root of each number in the array: ",
  squared([2, 4, 6, 8])
);
