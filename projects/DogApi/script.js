// API URL https://dog.ceo/api/breeds/image/ramdom
// ***notes***
// API - Application Programming Interface
// this solves for having to build your own data base, in this case
const dogImageDiv = document.getElementById("dogImage");
const handleDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dogImageDiv.innerHTML = `<img src=${json.message} alt=${json}  width=100 height=100/>`;
    });
};

// *** testing data on star wars api
fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((json) => console.log(json));
