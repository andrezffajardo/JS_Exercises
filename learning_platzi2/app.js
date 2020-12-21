/*let name = "Andres Fajardo";
let lastLetter = name.charAt(name.length - 1);
let lastLetter = name.slice(-1);
let lastLetter = name.substr(-1);

console.log(lastLetter);*/

/*let name = "Andres";

function printNameUppercase(n) {
  n = n.toUpperCase();
  console.log(n);
}

printNameUppercase(name);*/

//objects

var andres = {
  name: "Andres",
  lastName: "Fajardo",
  age: 17,
  engineer: false,
  chef: false,
  singer: false,
  dj: false,
  guitarist: false,
  dronePilot: true,
  weight: 70,
};

var jose = {
  name: "Jose",
  lastName: "Caicedo",
  age: 38,
};

/*function printNameUppercase(person) {
  //var name = person.name
  var { name } = person;
  console.log(name.toUpperCase());
}

printNameUppercase(andres);
printNameUppercase(jose);
//printNameUppercase({ name: "Carlos" });*/

// Functions Exercise
/*function printNameAndAge({ name, age }) {
  //var { name, age } = person;
  console.log(`Hi, my name is ${name.toUpperCase()} and I am ${age} old`);
}*/
// Exercise with arrow function
/*var printNameAndAge = ({ name, age }) =>
  console.log(`Hi, my name is ${name.toUpperCase()} and I am ${age} old`);
printNameAndAge(andres);
printNameAndAge(jose);*/

/*function birthday(person) {
  return {
    ...person,
    age: person.age + 1,
  };
}
console.log(andres);
console.log(birthday(andres));*/

function printProfession(person) {
  console.log(`${person.name} is:`);
  if (person.engineer) {
    console.log("Engineer");
  } else {
    console.log("Is not engineer");
  }
  if (person.chef) {
    console.log("Chef");
  }
  if (person.singer) {
    console.log("Singer");
  }
  if (person.dj) {
    console.log("DJ");
  }
  if (person.guitarist) {
    console.log("Guitarist");
  }
  if (person.dronePilot) {
    console.log("Drone Pilot");
  }
}

printProfession(andres);

//Age Exercise

/*function printAdult(person) {
  console.log(`${person.name} is: `);
  if (person.age >= 18) {
    console.log("adult");
  } else {
    console.log("younger");
  }
}

printAdult(andres);*/

//Age Execise 2
/*const ADULT_AGE = 18;

function adultPerson(person) {
  return person.age >= ADULT_AGE;
}

function printAdult(person) {
  if (adultPerson(person)) {
    console.log(`${person.name} is adult`);
  } else {
    console.log(`${person.name} is younger`);
  }
}

printAdult(andres);
printAdult(jose);*/

//Age Execise 3 arrow functions
const ADULT_AGE = 18;

let adultPerson = ({ age }) => age >= ADULT_AGE;

function printAdult(person) {
  if (adultPerson(person)) {
    console.log(`${person.name} is adult`);
  } else {
    console.log(`${person.name} is younger`);
  }
}

function accessPermission(person) {
  if (!adultPerson(person)) {
    console.log("Access Denied");
  } else {
    console.log("Access");
  }
}
printAdult(andres);
printAdult(jose);
accessPermission(andres);
accessPermission(jose);

//Age younger exercise arrow function
let youngPerson = (person) => !adultPerson(person);

let printYounger = (person) =>
  youngPerson(person)
    ? console.log(`${person.name} is younger`)
    : console.log(`${person.name} is adult`);

printYounger(andres);
printYounger(jose);

// For statement Exercise

//console.log(`At the year beginning ${andres.name} weighs ${andres.weight} kg`);

const INCREASED_WEIGHT = 0.3;
const DAYS_OF_THE_YEAR = 365;

// function gainWeight (person) {
//  return person.weight += 0.2
// }

const gainWeight = (person) => (person.weight += INCREASED_WEIGHT);

const loseWeight = (person) => (person.weight -= INCREASED_WEIGHT);

/*for (var i = 1; i <= DAYS_OF_THE_YEAR; i++) {
  let r = Math.random();
  if (r < 0.25) {
    gainWeight(andres);
  } else if (r < 0.5) {
    loseWeight(andres);
  }
}*/
const eataLot = () => Math.random() < 0.3;
const doesExercise = () => Math.random() < 0.4;
const GOAL = andres.weight - 3;
let days = 0;

while (andres.weight > GOAL) {
  if (eataLot()) {
    gainWeight(andres);
  }
  if (doesExercise()) {
    loseWeight(andres);
  }
  days += 1;
}

/*console.log(
  `At the year ending ${andres.name} weighs ${andres.weight.toFixed(1)} kg`
);*/

console.log(`${days} days passed until ${andres.name} lose 3kg`);

// Do while Example

let counter = 0;

const raining = () => Math.random() < 0.25;

do {
  counter++;
} while (!raining());

console.log(`I went to see if it rained ${counter} times`);
