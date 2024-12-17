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


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[0]);
const age3 = calcAge(years[years.lenght - 1]);

console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1])];
const population = [10, 50, 80, 95];
console.log(population.length);

const friends = ["Michael", "Steven", "Peter"];

// Add
friends.push("Jay");

console.log(friends);

// Add First
friends.unshift("John");

//Remove last
const popped = friends.pop();
console.log(popped);
console.log(friends);

//remove first

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven"));

console.log(friends.includes("steven"));


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmass",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas ? Choose between firstName, lastName, age, job and friends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else [console.log("Wrong request! what would you like")];

jonas.location = "portugal";
jonas["twitter"] = "@jonassch";
console.log(jonas);
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmass",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(jonas.friends.length);

console.log(
  `${jonas["firstName"]} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmass",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//'Jonas is a 46-year old teacher. and he has a driver's license"

console.log(jonas.getSummary());


// console.log("lifting weights repition 1");
// console.log("lifting weights repition 2");
// console.log("lifting weights repition 3");
// console.log("lifting weights repition 4");
// console.log("lifting weights repition 5");
// console.log("lifting weights repition 6");
// console.log("lifting weights repition 7");
// console.log("lifting weights repition 8");
// console.log("lifting weights repition 9");
// console.log("lifting weights repition 10");

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repition ${rep}`);
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i <= jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types[i] = typeof jonas[i];
  
  types.push(typeof jonas[i]);
}

types[0] = "string";

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break

for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("-----Break with Numbers----");

for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}


for (let excercise = 1; excercise <= 3; excercise++) {
  console.log(`----starting exercise ${excercise}`);
  
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`lifting weight rep ${rep}`);
  }
}

*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`lifting weights repition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
