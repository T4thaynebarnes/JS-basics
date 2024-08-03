const BASE_URL = "https://superheroapi.com/api/";
const TOKEN = "5f2598cedb6c194b8e21885a5655cc9a";

const getSuperHero = (id) => {
  fetch(
    `https://superheroapi.com/api.php/5f2598cedb6c194b8e21885a5655cc9a/${id}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
  const superHeroes = json.slice(0, 20);
  console.log(superHeroes);
};

// console.log("auto-logged", getSuperHero());

const handleRandomHero = () => {
  const numberOfDudes = 731;
  console.log(Math.floor(Math.random() * numberOfDudes) + 1);
  return Math.floor(Math.random() * numberOfDudes) + 1;
};
