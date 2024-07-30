// DOM  getElementById() methods
// targeting the div id violetDiv in html file and storing it in a variable
let violet = document.getElementById("violetDiv");
let aqua = document.getElementById("aquaDiv");
let blue = document.getElementById("blueDiv");
// accessing the data in the variable to listen for a click event to promp an alert saying the string.
violet.onclick = () => alert("You clicked violet!");
aqua.onclick = () => alert("You clicked on aquamarine!");
blue.onclick = () => alert("you clicked on blue!");
// or if you want to grab all of them at once you can use class names as in line 12
// creating variable , targeting all div's in html file with class name colorsquare & storing it in a variable
const squares = document.querySelectorAll(".colorSquare");
console.log("accessing value in slot 2 of squares array", squares[2].value);
let green = document.getElementById("greenDiv");
let yellow = document.getElementById("yellowDiv");
let red = document.getElementById("redDiv");
// for each loop **
// for each item in the squares array, print its value
squares.forEach((square) => console.log(square.value));
// declaring an object as a variable to store the beginning number of clicks
const timesClicked = { red: 0, green: 0, yellow: 0 };
// calling forEach loop on the variable squares (which is the value of HTML elements refer to line 12)
squares.forEach((square) => {
  // adding an eventlistener to the
  square.onclick = () => {
    // accessing times clicked and updating the object values
    timesClicked[square.value] += 1;
    console.log(square.value);
    square.innerHTML = timesClicked[square.value];
  };
});
