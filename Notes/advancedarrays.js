// advanced arrays

// ** objective: takes the phrase and counts out how many characters there are
// this counts from zero
// it is not an accurate count of the letters in the phrase, due to zero based index
const letterCounter = () => {
  const phrase = "hey can you go to the grocery store with me?";
  //   you can change line 8 to for (const fistbumpage of phrase)
  // this will give you the actual letters, below gives you the index position
  for (fistbumpage in phrase) {
    console.log(fistbumpage);
  }
};

// to fix the above problem
const letterCounter2 = () => {
  const phrase2 = "123456789";
  for (beaverballs in phrase2) {
    // type cast it into a number with number(), if not +1 will multiply by 11
    console.log(Number(beaverballs) + 1);
  }
};

//Objective: this function will prompt the user to enter a phrase
// and count how many letters are in the phrase and display it
// as an object on the console. if you call the property of .length on a string type it will do the same thing
// const letterCounter3 = (phrase3) => {
//   // creating variable to store the result in from line 30
//   let result = 0;
//   for (const applesnstuff in phrase3) {
//     console.log(Number(applesnstuff) + 1);
//     result = Number(applesnstuff) + 1;
//   }
//   //   by making the return an object you can create a key pair to store the values in
//   return { result: result };
// };
// const phrase3 = prompt("write some stuff!");
// console.log(letterCounter3(phrase3));

// objective: loop thru an array of numbers
// and add each number to itself
// declaring a variable as an array of numbers
const numbersArray = [1, 2, 3, 4, 5, 5, 10];
// arrow func sumArray taking 1 parameter, the array of numbers
const sumArray = (numbersArray) => {
  // results is a variable created to store the answer
  let result = 0;
  //   for of loop. to loop thru numbers
  for (number of numbersArray) {
    // logic to be performed on each iteration of the loop
    // result += number; is equivalent to result = result + number;
    //  += is shorthand operator for adding the value and then storing in result variable
    result += number;
  }
  return { result };
};
// calling function in a log and passing the array
// with the numbers to be looped as an argument
console.log("sumArray()", sumArray(numbersArray));

// excercise objective: create a func
// to loop thru an array of numbers and store
//  the highest number in the iteration as the result
const nums = [1, 2, 3, 4, 5, 6, 4, 3, 8, 2];
const highestNumber = (nums) => {
  // instead of result variablew = 0,
  // it will start with the first number in the index[0]
  let result = nums[0];
  // loop
  for (let num of nums) {
    if (num > result) {
      result = num;
    }
  }
  // when you return this variable in curly brackets it creates the value into an object
  return { result };
};
console.log(highestNumber(nums));

// Excersice Objective: this will take a string data type
//  and count how many times a particular letter occurs in
// the phrase
// ************************CODE BLOCK*************************
// const letterFrequency = (phrase) => {
//   let frequency = {};
//   for (const letter of phrase) {
//     if (letter == frequency) {
//       frequency.letter + 1;
//     } else {
//       frequency = 1;
//     }
//   }
//   return frequency;
// };
// console.log(letterFrequency("haha"));
// ***********CORRECTED SYNTAX AND LOGIC*****************
const letterFrequency = (phrase) => {
  let frequency = {};
  for (const letter of phrase) {
    // Check if the letter already exists in the frequency object
    if (frequency[letter]) {
      // If it exists, increment its count
      frequency[letter] += 1;
    } else {
      // If it doesn't exist, initialize its count to 1
      frequency[letter] = 1;
    }
  }
  return frequency;
};

// console.log("counts the letters", letterFrequency("kung fu"));
// ********************code block**************
// objective: counts how many words
// const wordFrequency = (phrase) => {
//   // *using split.() to create an array with each word seperated by the spaces
//   //   *create an array with each word as an item in the array
//   let frequency = phrase.split(" ");
//   //   *log out the array created
//   console.log("testing split.()", frequency);
//   //   *for every word in the array
//   for (const word of frequency) {
//     // *check if word exists already
//     if (frequency[word]) {
//       // *if it exists already then add 1 to that word count
//       frequency[word] += 1;
//       //  *if does not exist already then count it
//     } else {
//       frequency[word] = 1;
//     }
//   }

//   return frequency;
// };

// console.log(wordFrequency("one two two three three three"));
// *******************************easier way to write this below
// above will work however it is
//  almost the same function as letterfrequency()
// Objective: count how many words are in the phrase

const wordFrequency = (phrase) => {
  // createing an array with each word in it seperated
  // by the spaces
  let words = phrase.split(" ");

  //    returning letterFrequency() and passing the array
  //  created and stored in variable words in as an argument
  return letterFrequency(words);
};
// calling function with a log and passing words thru
console.log(
  wordFrequency("beaver balls and stuff making things fun what can I say?")
);
// ***********************************************
// Exercise Objective: Write a function that takes in an array
// and sort the numbers inside from least to greatest
// ***********code block************
const leastToGreatest = (array) => {
  // added an anonymous function to sort() method
  // it simply takes params of a & b and minuses a from b to see which
  // value is greater it also accounts for negative numbers
  let sortedNumArray = array.sort((a, b) => a - b);
  return { sortedNumArray };
};
console.log(
  "value of least to greatest",
  leastToGreatest([9, 7, 5, 3, 1, 2, 4, 6, 8, 10, -2, 10, 10])
);
// ******************HIGHER ORDER FUNCTIONS **************.
// map
// filter
// reduce
// ***** EXAMPLE OF MAP******
// objective map loops thru the array
// and prints out each item in the array to the console.
let randomArray = [1, 2, 3, "A", "🥷", "(❁´◡`❁)"];
// calling map on the array created above putting in an
//  anonymous function to print out each item
// in the array 3 number values and 3 string values
randomArray.map((number) =>
  console.log("map example: prints out each item in the array", number)
);
// *********************************
// filter
const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 4, 5, 6], 3));
