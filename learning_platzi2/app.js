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
  age: 40,
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
function printNameAndAge({ name, age }) {
  //var { name, age } = person;
  console.log(`Hi, my name is ${name.toUpperCase()} and I am ${age} old`);
}
printNameAndAge(andres);
printNameAndAge(jose);
