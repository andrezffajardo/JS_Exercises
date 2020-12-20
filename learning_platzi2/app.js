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
const ADULT_AGE = 18;

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
printAdult(jose);
