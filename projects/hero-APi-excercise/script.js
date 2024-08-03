// API excercise with superheroapi.com we added a search bar that will search the API by the name passed into it in the input field

// url: https://superheroapi.com/api (you have to put .php in the addres sbelow only for this api)
//regular fetch request
// const getSuperHero = () => {
//   fetch("https://superheroapi.com/api.php/5f2598cedb6c194b8e21885a5655cc9a/100")
//     .then((response) => response.json())
//     .then((json) =>
//       console.log(
//         json,
//         "accessing image",
//         json.image,
//         "testing different values in object ",
//         json.powerstats
//       )
//     );
// };
// *****************************************************
// same function as above just using the async await method
// ACCESS TOKEN*** you need to replace the access token with the one you get at www.superheroapi.com on line 22
// declaring a variable to store my access token
const SUPERHERO_TOKEN = "5f2598cedb6c194b8e21885a5655cc9a";
// declaring variable to store the URL for the API
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
// declaring variable
const searchInput = document.getElementById("searchInput");
// **********************************************
// function gets a hero and renders info on the DOM
const getSuperHero = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Shitt went wrong buddy!");
    }

    const json = await response.json();
    console.log(json);
    // when get request comes back successful it will update the HTML elements in the dom with the data
    document.getElementById(
      "connections"
    ).innerHTML = `Affiliations: ${json.connections["group-affiliation"]}`;
    document.getElementById(
      "appearance"
    ).innerHTML = `First Appearance: ${json.biography["first-appearance"]}`; //I had to surround the key first-appearance in []and make it a string
    document.getElementById("name-tag").innerHTML = `Name: ${json.name}`;
    document.getElementById(
      "combat"
    ).innerHTML = `<div>Combat Power: ${json.powerstats.combat}</div>`;
    document.getElementById(
      "img-container"
    ).innerHTML = `<img src=${json.image.url} alt="a picture of: ${json.name}"/>`;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
// ***** making a random order button****
const handleRandomHero = () => {
  const numberOfDudes = 731;
  return Math.floor(Math.random() * numberOfDudes) + 1;
};
console.log(handleRandomHero());

// creating function to search the API array for a specific superhero
const handleSearchHero = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/search/${name}`);

    if (!response.ok) {
      throw new Error("Shitt went wrong buddy!");
    }

    const json = await response.json();
    // accounting for multiple results, grabbing the first result in the api array example two deadpools, two spidermans etc.
    const hero = json.results[0];
    console.log("json results", hero);
    // console.log(searchInput.value);
    // when get request comes back successful it will update the HTML elements in the dom with the data
    document.getElementById(
      "connections"
    ).innerHTML = `Affiliations: ${hero.connections["group-affiliation"]}`;
    document.getElementById(
      "appearance"
    ).innerHTML = `First Appearance: ${hero.biography["first-appearance"]}`; //I had to surround the key first-appearance in []and make it a string
    document.getElementById("name-tag").innerHTML = `Name: ${hero.name}`;
    document.getElementById(
      "combat"
    ).innerHTML = `<div>Combat Power: ${hero.powerstats.combat}</div>`;
    document.getElementById(
      "img-container"
    ).innerHTML = `<img src=${hero.image.url} alt="a picture of: ${hero.name}"/>`;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
