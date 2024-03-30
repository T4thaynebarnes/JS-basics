// objects & object methods.
const person = {
  name: "leonardo",
  shirt: "white",
};
// two way to access key value pairs in an object DOT notation & bracket Notation
console.log("value of name: ", person.name);
console.log("value of shirt: ", person.shirt);
// bracket notation
console.log("bracket notation value of name: ", person["name"]);
console.log("accessing value of shirt bracket notation: ", person["shirt"]);
// nested objects below
let people = {
  name: "batman",
  superpower: "jui-jitsu",
  age: "36",
  story: "was ophaned as a child and inherited his fathers estate",
  contact: {
    phone: "987-654-3210",
    email: "none@none.com",
    address: {
      city: "pocatello",
      country: "USA",
    },
  },
};
// dot notation accessing nested objects
console.log("accessing nested object contact: ", people.contact.phone);
console.log(
  "name: ",
  people.name,
  "superpower: ",
  people.superpower,
  "city: ",
  people.contact.address.city
);
console.log(people);
// function to display object
const introducer = (name, superpower) => {
  let person = {
    name: name,
    superpower: superpower,
    // nested object inside
    assets: {
      home: 50000,
      car: 20000,
      rentalUnit: 1000,
    },
  };
  //   intro is a variable i am storing the logic in
  // and returning it below
  let intro = `Hi my name is ${person.name} & 
   my superpower is ${person.superpower} & my net worth is ${
    person.assets.home + person.assets.car + person.assets.rentalUnit
  }`;
  return intro;
};
// passing in arguments when calling function inside of log
console.log(introducer("some dude", "kung fu"));

// practice using method or functions inside of objects
const fakePerson = (name, superpower) => {
  let person2 = {
    name: name,
    superpower: superpower,
    assets: {
      home: 100000,
      savings: 40000,
      retirement: 180000,
      //   netWorth is a function nested inside of object
      netWorth: function () {
        return this.home + this.savings + this.retirement;
      },
    },
  };
  let output = `Hi my name is ${person2.name} &
   my superpower is ${person2.superpower} my net 
   worth is $${person2.assets.netWorth()}USD`;
  return output;
};
console.log(fakePerson("dumbledore", "magic"));
