let country = "USA";
let continent = "North America";
let population = 300;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language = "english";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const localLanguage = "english";
console.log(localLanguage);

const newPopulation = population / 2;
const finlandPopulation = 6;
const avgPopulation = 33;
console.log(newPopulation + 1 > finlandPopulation);
console.log(newPopulation + 1 > avgPopulation);

const countryDescription =
  country +
  " " +
  "is in" +
  " " +
  continent +
  "" +
  ", and its" +
  " " +
  population +
  " " +
  "speak" +
  " " +
  language;
console.log(countryDescription);

console.log(
  `${country} is in ${continent} and it's ${population} speaks ${language}`
);
