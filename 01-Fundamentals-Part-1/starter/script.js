/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1901;

// const job;

var job = "programmber";
job = "teacher";

// math operations

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmass";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x=x+10 = 25
x *= 4;
console.log(x);

// Compasition Operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + " " + firstName + ", a" + (year - birthYear) + " " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular text---`);

console.log(`String
multiple
line`);

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
console.log(`Sarah is too yound, wit another ${yearLeft} years :)!`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion //

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(23));

//type coercion
console.log("23" * "2");


//5 falsey values: 0, '', undefined, null, NaN

const money = 0;
if (money) {
  console.log("Don't spend it all;");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined ");
}

const age = 18;
if (age === 18) {
  console.log("You just became an adult");
}

const favourite = Number(prompt("what's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 2020) {
  console.log("Cool! 21020 is amazing");
} else if (favourite === 7) {
  console.log("7 is also good");
} else {
  console.log("Numbner is not 2020 or 7");
}

if (favourite !== 23) console.log("why not 23");

const hasDriversLicense = true;
const hasGoodVision = true;
//
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("someone else should drive");
}
//

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("someone else should drive");
}

const day = "monday";
switch (day) {
  case "monday": // day == monday
  console.log("Plan course structure");
  console.log("Go to coding meetup");
  break;
  case "tuesday":
    console.log("prepa theory videos");
    break;
    case "wednesday":
      case "thursday":
        console.log("write code examples");
        break;
        
        case "friday":
          console.log("Record videos");
          break;
          
          case "saturday":
            case "sunday":
              console.log("Enjoe weekend");
              break;
              default:
                console.log("Not a valid day!");
              }
              
              const day = "sunday";
              if (day == "monday") {
                console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day == "tuesday") {
  console.log("prepare theory videos");
} else if (day == "thursday" || day == "wednesday") {
  console.log("Record videos");
} else if (day == "friday") {
  console.log("prepare theory videos");
} else if (day == "saturday" || day == "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day!");
}

const age = 23;
age >= 18 ? console.log("i like wine") : console.log("i like to drink water");

*/
const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
