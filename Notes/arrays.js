// arrays: this below displays the zero based index how to reference an item in an array

groceries = ["🍌", "🪙", "☔", "✏️"];
console.log("before push method is used: ", groceries);
// console.log(groceries[0]);
// console.log(groceries[1]);
// console.log(groceries[2]);
// console.log(groceries[3]);
// array methods Push places an item in the index at the last place holder
groceries.push("♣️");
groceries.push("♥️", "♦️", "🏠");
// this is to show how placement of log runs the
// one above is not reflecting the additions that are being pushed
console.log("whole array after push", groceries);

// slice() The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
//  The slice() method does not change the original string.
console.log("slicing and displaying items 2- 4", groceries.slice(2, 4));
console.log(groceries.slice(1, 4));

// indexOf  it will help identify what index the item in  question is
console.log("indexOf ♦️ which is: ", groceries.indexOf("♦️"));

// length
console.log(
  "length counts how many items are in the array which there are: ",
  groceries.length
);
