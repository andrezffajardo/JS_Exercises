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

/*var andres = {
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
};*/

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

/*function printProfession(person) {
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

printProfession(andres);*/

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
/*const ADULT_AGE = 18;

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
accessPermission(jose);*/

//Age younger exercise arrow function
/*let youngPerson = (person) => !adultPerson(person);

let printYounger = (person) =>
  youngPerson(person)
    ? console.log(`${person.name} is younger`)
    : console.log(`${person.name} is adult`);

printYounger(andres);
printYounger(jose);*/

// For statement Exercise

//console.log(`At the year beginning ${andres.name} weighs ${andres.weight} kg`);

/*const INCREASED_WEIGHT = 0.3;
const DAYS_OF_THE_YEAR = 365;*/

// ***Normal Function***
//-------------------------------------
// function gainWeight (person) {
//  return person.weight += 0.2
// }
//-------------------------------------

/*const gainWeight = (person) => (person.weight += INCREASED_WEIGHT);

const loseWeight = (person) => (person.weight -= INCREASED_WEIGHT);*/

/*for (var i = 1; i <= DAYS_OF_THE_YEAR; i++) {
  let r = Math.random();
  if (r < 0.25) {
    gainWeight(andres);
  } else if (r < 0.5) {
    loseWeight(andres);
  }
}*/
/*const eataLot = () => Math.random() < 0.3;
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
}*/

/*console.log(
  `At the year ending ${andres.name} weighs ${andres.weight.toFixed(1)} kg`
);*/

/*console.log(`${days} days passed until ${andres.name} lose 3kg`);*/

// Do while Example
//-------------------------------------------

/*let counter = 0;

const raining = () => Math.random() < 0.25;

do {
  counter++;
} while (!raining());*/

// challenge
//--------------------------------------------

/*if (counter > 1) {
  console.log(`I went to see if it rained ${counter} times`);
} else {
  console.log(`I went to see if it rained ${counter} time`);
}*/

// Challenge -> Conditional (ternary) operator
//----------------------------------------------

/*console.log(
  `I went to see if it rained ${counter} ${counter > 1 ? "times" : "time"}`
);*/

// Switch Example
//-----------------------------

// Objeto que guarda los horoscope, se imprimen loshoroscope
//sin importar como se escriban May-Min, con o sin tilde.
/*const horoscope = {
  aries: "21 march - 19 april",
  taurus: "20 april - 20 may",
  gemini: "21 may - 20 june",
  cancer: "21 june - 22 july",
  leo: "23 july - 22 august",
  virgo: "23 august - 22 september",
  libra: "23 september - 22 october",
  scorpio: "23 october - 21 november",
  sagittarius: "22 november - 21 december",
  capricorn: "22 december - 19 january",
  aquarius: "20 january - 18 february",
  pisces: "19 february - 20 march",
};

// Evalua el signo y regresa el horóscopo
const calculateSign = function (sign) {
  switch (sign.toLowerCase()) {
    case "aries":
      console.log(horoscope.aries);
      break;
    case "taurus":
      console.log(horoscope.taurus);
      break;
    case "gemini":
      console.log(horoscope.gemini);
      break;
    case "cancer":
      console.log(horoscope.cancer);
      break;
    case "leo":
      console.log(horoscope.leo);
      break;
    case "virgo":
      console.log(horoscope.virgo);
      break;
    case "libra":
      console.log(horoscope.libra);
      break;
    case "scorpio":
      console.log(horoscope.scorpio);
      break;
    case "sagittarius":
      console.log(horoscope.sagittarius);
      break;
    case "capricorn":
      console.log(horoscope.capricorn);
      break;
    case "aquarius":
      console.log(horoscope.aquarius);
      break;
    case "pisces":
      console.log(horoscope.pisces);
      break;
    default:
      console.log("This zodiac sign don't exist");
      break;
  }
};

// Arrow function que sirve para seguir preguntando el signo que quieres ver hasta que se escriba la palabra "salir"
var askSign = () =>
  (zodiacSign = prompt(
    "What is your zodiac sign?, write leave if you want to end."
  ));

// Asigna valor a la variable signoZodiacal para entrar al while
askSign();

// Se ejecuta mientras el usuario no escriba la palabra "salir"
while (zodiacSign.toLowerCase() !== "leave") {
  calculateSign(zodiacSign);
  askSign();
}*/

// Array intro

/*var sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  height: 1.72,
  quantityBooks: 111,
};

var alan = {
  name: "Alan",
  lastName: "Perez",
  height: 1.86,
  quantityBooks: 78,
};

var marty = {
  name: "Martin",
  lastName: "Gomez",
  height: 1.85,
  quantityBooks: 132,
};

var dario = {
  name: "Dario",
  lastName: "Juarez",
  height: 1.71,
  quantityBooks: 90,
};

var vicky = {
  name: "Vicky",
  lastName: "Zapata",
  height: 1.56,
  quantityBooks: 91,
};

var paula = {
  name: "Paula",
  lastName: "Barros",
  height: 1.76,
  quantityBooks: 182,
};*/

//const isTall = (person) => person.height > 1.8;

// se puede desglosar:
/*const isTall = ({ height }) => height > 1.8;

var persons = [sacha, alan, marty, dario, vicky, paula];

var tallPersons = persons.filter(isTall);*/

// En la documentación oficial muestran que se puede colocar adentro de filter la función
//var tallPersons = persons.filter((isTall = (person) => person.height > 1.8));

/*const heightToCms = (person) => ({
  //person.height = person.height * 100
  ...person,
  height: person.height * 100,
});

var personsCms = persons.map(heightToCms);

console.table(personsCms);*/

//console.log(tallPersons);

/*for (var i = 0; i < persons.length; i++) {
  var eachPerson = persons[i];
  console.log(`${eachPerson.name} is ${eachPerson.height} mts`);
}*/

// Challenge:

/*const isShort = ({ height }) => height < 1.8;
var shortPersons = persons.filter(isShort);*/
//console.log(shortPersons);

// Reducer()

/*const reducer = (acum, person) => {
  return acum + person.quantityBooks;
};*/

/*const reducer = (accum, { quantityBooks }) => accum + quantityBooks;

var totalBooks = persons.reduce(reducer, 0);

console.log(`In total everyone have ${totalBooks} books`);*/

// Classes in JS

/*function person(name, lastName, height) {
  this.name = name;
  this.lastName = lastName;
  this.height = height;
}*/

// Exercise Classes
/*person.prototype.greeting = function () {
  this.height > 1.8
    ? console.log(`Hi, my name is ${this.name} ${this.lastName} and I am tall`)
    : console.log(
        `Hi, my name is ${this.name} ${this.lastName} and I am short`
      );
};

var andres = new person("Andres", "Fajardo", 1.6);
andres.greeting();*/

// JS Classes extends and passing functions as parameter of another function
//----------------------------------------------------------------------------

/* class Person {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }

  greeting(fn) {
    //var name = this.name;
    //var lastName = this.lastName;
    var { name, lastName } = this;
    console.log(`Hi, my name is ${name} ${lastName}`);
    if (fn) {
      fn(name, lastName, false);
    }
  }

  iamHeight() {
    return this.height > 1.8;
  }
}

class dev extends Person {
  constructor(name, lastName, height) {
    super(name, lastName, height);
  }

  greeting(fn) {
    var { name, lastName } = this;
    console.log(`Hi, my name is ${name} ${lastName} and I am developer`);
    if (fn) {
      fn(name, lastName, true);
    }
  }
}

function answerGreeting(name, lastName, isDev) {
  console.log(`Good day ${name} ${lastName}`);
  if (isDev) {
    console.log(`Oh, you are developer!`);
  }
}

var andres = new Person("Andres", "Fajardo", 1.7);
var Vale = new dev("Valentine", "Klauss", 1.65);

andres.greeting(answerGreeting);
Vale.greeting(answerGreeting); */

//  Asynchronous Javascript
// ------------------------

/*const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $
    .get(url, opts, callback)
    .fail(function () {
    console.log(`Error, the character ${id} can not get`);
  });
}

getCharacter(1, function (character) {
  console.log(`Hola, yo soy ${character.name}`);

  getCharacter(2, function (character) {
    console.log(`Hola, yo soy ${character.name}`);

    getCharacter(3, function (character) {
      console.log(`Hola, yo soy ${character.name}`);

      getCharacter(4, function (character) {
        console.log(`Hola, yo soy ${character.name}`);

        getCharacter(5, function (character) {
          console.log(`Hola, yo soy ${character.name}`);

          getCharacter(6, function (character) {
            console.log(`Hola, yo soy ${character.name}`);
          });
        });
      });
    });
  });
});*/

// Promises Javascript
//---------------------
/* const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id) {
  return new Promise(function (resolve, reject) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(function () {
      reject(id);
    });
  });
}

function onError(id) {
  console.log(`Error, the character ${id} can not get`);
} */

/*
getCharacter(1)
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
    return getCharacter(2);
  })
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
    return getCharacter(3);
  })
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
    return getCharacter(4);
  })
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
    return getCharacter(5);
  })
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
    return getCharacter(6);
  })
  .then(function (character) {
    console.log(`Hi, I am ${character.name}`);
  })
  .catch(onError);*/

/* async function getCharacters() {
  var ids = [1, 2, 3, 4, 5, 6];
  var promises = ids.map(function (id) {
    return getCharacter(id);
  });
  try {
    var characters = await Promise.all(promises);
    console.log(characters);
  } catch (id) {
    onError(id);
  }
}

getCharacters();

// Change the context of a function in Javascript

const pablo = {
  nombre: "Pablo",
  apellido: "Andrés",
};
const mariela = {
  nombre: "Mariela",
  apellido: "Riesnik",
};

function saludar(saludo = "Hola") {
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}
setTimeout(saludar.bind(pablo, "Hola loco!"), 1000);
// Hola loco!, mi nombre es Pablo

//también se puede agragar en la declaración de la constante.
const saludarAPablo = saludar.bind(pablo, "Hola loco!!");
// Hola loco!!, mi nombre es Pablo */


//Ejemplo cuenta regresiva
/* function cuentaRegresiva(num) {
  num = --num;

  if (num > 0) {
    console.log(num);
    cuentaRegresiva(num);
  } else {
    console.log("Happy New Year!!");
  }
}

cuentaRegresiva(10); */

// Example second largest number
/* function secondLargestNumber(numbers) {
  let first = numbers[0];
  let second = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i];
    }
    if (numbers[i] > second && numbers[i] < first) {
      second = numbers[i];
    }
  }
  return [second, first]; //Devuelve dos valores de la funcion
}

let nums = [8, 4, 6, 10, 9, 11, 25, 22];
console.log(secondLargestNumber(nums)); */

/* class Persona {
	constructor(nombre, apellido, altura, genero){
		this.nombre = nombre;
		this.apellido = apellido;
		this.altura = altura;
		this.genero = genero;
	}
	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
		if(fn){
			var {nombre, apellido} = this;
			fn(nombre, apellido);
		}
	}
	soyAltX(){
		var altX = this.genero == 'masculino' ? 'alto' : 'alta';
		var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y definitivamente soy ${altX}.` 
										: `Soy ${this.nombre} ${this.apellido} y no, no soy ${altX}.`;
		console.log(string);
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura){
		super(nombre, apellido, altura);
	}
	saludar(fn){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollader.`);
		if(fn){
			var {nombre, apellido} = this;
			fn(nombre, apellido, true);
		}
	}
}

function responderSaludo(nombre, apellido, esDev){
	console.log(`Buen día ${nombre} ${apellido}.`);
	if (esDev) {
		console.log(`Ah mirá, no sabía que eras dev.`);
	}
}

var pablo = new Persona('Pablo', 'Andrés', 1.78, 'masculino');
var joaquin = new Desarrollador('Joaquín', 'Perez', 1.91, 'masculino');
var rosa = new Persona('Rosa', 'Mosqueta', 1.81, 'femenino');
var elis = new Persona('Elis', 'Detta', 1.73, 'femenino');

pablo.saludar();
joaquin.saludar(responderSaludo);
rosa.saludar(responderSaludo);
elis.saludar(responderSaludo); */

function sum(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}



function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum))
console.log(calc(2, 5, mult))