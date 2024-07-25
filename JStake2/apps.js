// baby weather app
//
let weatherBoard = document.querySelector("#weather");
const handleBeaverBalls = () => {
  // storing value of user data in variable weather
  let weather = prompt("whats the weather like?");
  //   conditional statement with strict operator if
  // string is rain it evaluates is true
  if (weather == "rain") {
    // if true logs string below
    console.log();
    weatherBoard.innerText = "grab your 🥜 its the raining 🐿️🐿️";

    // if false logs string below
  } else {
    console.log("holy bat shitt ratman!! 🐀💚");
    weatherBoard.innerText = "holy bat shitt ratman 🐀💚";
  }
};
