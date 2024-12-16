"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "audio";

// const private = 534;

function logger() {
  console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);


function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expession

const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function

const calcAge3 = (birthYear, firstName) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(1991, "Jonas"));

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//
const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
}
return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(1991, "Jones"));

function logger() {
  console.log(`My name is Jonas`);
}

// calling / running / invoking
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} appples and ${oranges} oranges`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcage2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcage2(1991);
console.log(age2);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPop = percentageOfWorld1(1441);
console.log(chinaPop);

const indiaPop = percentageOfWorld1(1200);
console.log(indiaPop);

const usaPop = percentageOfWorld1(300);
console.log(usaPop);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPop2 = percentageOfWorld2(1441);
console.log(chinaPop2);

const indiaPop2 = percentageOfWorld2(1200);
console.log(indiaPop2);

const usaPop2 = percentageOfWorld2(300);
console.log(usaPop2);

//Arow function

const calcAge3 = (birthYear) => 2037 - birthYear;

const age = calcAge3(1991);
console.log(age);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(1991, "Jonas"));
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of appple and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const describePopulation = function (country, population) {
  return console.log(
    `${country} has ${population} which is about ${china3} of the world `
  );
};

const percentageOfWorld3 = function (population) {};

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const china3 = describePopulation("china", 1441);
console.log(china3);


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName1) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName1} reites in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName1} has already retired`);
  return -1;
}

// return `${firstName1} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(1991, "Jonas"));
console.log(yearsUntillRetirement(1970, "Mike"));


*/

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";

console.log(friends[2]);
friends[2] = "Nirali";
console.log(friends[2]);
