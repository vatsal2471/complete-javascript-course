"use strict";
/*

function logger() {
  console.log("My name is Jonas");
}

//Calling / running / invoking functions
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oragnes.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//Function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);

//Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntillRetirement(1991, "Jonas"));
console.log(yearsUntillRetirement(1982, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oragnes.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
  return -1;
  }
};

console.log(yearsUntillRetirement(1991, "Jonas"));
console.log(yearsUntillRetirement(1950, "Mike"));


const friends = ["Michael", "Steven", "Peter"];

console.log(friends[0]);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";

const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
calcAge(years[0]);

const age1 = calcAge(years[1]);

console.log(age1);

const age2 = calcAge(years[years.length - 1]);
console.log(age2);

const ages = [];


const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("jay");

friends.unshift("John");

console.log(friends);

friends.pop(); // removes last
const popped = friends.pop();
console.log(popped);

friends.shift(); //removes first

console.log(friends);
console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//

// const interestedIn = prompt(
  //   `What do you want to know about jonas, choose betwen firstName, lastName, age, job and friends`
  // );
  
  // if (jonas[interestedIn]) {
    //   console.log(jonas[interestedIn]);
    // } else {
      //   console.log("Wrong request");
      // }
      
      jonas.location = "Portugal";
      jonas["twitter"] = "@jonasschemt";
      console.log(jonas);
      
      //Challenge
      console.log(
        `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
      );
      
      
      const jonas = {
        firstNacl
        me: "Jonas",
        lastName: "Schmedtmann",
        birthYear: 1991,
        job: "teacher",
        friends: ["Michael", "Peter", "Steven"],
        hasDriversLicense: true,
        
        // calcAge: function (birthYear) {
          //   return 2037 - birthYear;
          // },
          
          calcAge: function () {
            this.age = 2037 - this.birthYear;
            return this.age;
          },
        };
        console.log(jonas.calcAge(jonas.birthYear));
        console.log(jonas.age);
        console.log(jonas.age);
        console.log(jonas.age);
        console.log(jonas.age);
        
        //Challenge
        
        // console.log("lifting weights repition 1");
        
        // for loop keep running while condition is TRUE
        
        for (let rep = 1; rep <= 10; rep++) {
          console.log(`lifting weights repition ${rep}`);
        }
        
        const jonas = [
          "jonas",
          "Schmedtmann",
          2037 - 1991,
          "teacher",
          ["Michael", "Peter", "Steven"],
        ];

        for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repition ${rep}`);
}

let rep = 1;

while (rep <= 10) {
  console.log(`lifting weights repition ${rep}`);
  rep++;
}

*/
