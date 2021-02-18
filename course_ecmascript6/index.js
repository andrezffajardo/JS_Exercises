// Default Params
//-----------------
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'COL';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'COL') {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'MX');


// Template literals (Template strings)
//-------------------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multiline strings
//------------------
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n"
+ "Mauris et neque ac tellus interdum volutpat sit amet nec lectus."

// es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris et neque ac tellus interdum volutpat sit amet nec lectus.
`;

console.log(lorem)
console.log(lorem)

// destructuring 
//--------------

let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'COL'
}
console.log(person.name, person.age);

//es6
let person2 = {
  'name2': 'oscar',
  'age': 32,
  'country': 'COL'
}

let {name2, age} = person2;
console.log(name2, age);

// SPREAD Operator
//-----------------

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// Object propieties
//-------------------

let name1 = 'oscar';
let age = 32;

//es5
obj = { name1: name1, age: age};
console.log(obj);

//es6
obj2 = { name1, age};
console.log(obj2);

// Arrow functions
//----------------

const names = [
  { name: 'Andres', age: 40},
  { name: 'Juli', age: 32}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 name => {
  ...
}

const square = num => num * num;

// Promises
//----------
// True
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('Hello'))
.catch(error => console.log(error));


// False
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

// Classes in es6
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

  const calc = new calculator;
  console.log(calc.sum(4,3));

// Generators
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


//****es7****
//-----------

// includes method

let numbers = [1, 2, 3, 5, 8, 9];

if (numbers.includes(8)) {
  console.log('Yes, 8 is on list');
} else {
  console.log('No, 8 is not on list')
}

// Exponentiation operator

let base = 5;
let exponent = 2;
let result = base ** exponent;

console.log(result);

//****es8****
//-----------

// Object entries
const data = {
  frontend: 'Andres',
  backend: 'Andrea',
  desing: 'Julia',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object Values
const data = {
  frontend: 'Andres',
  backend: 'Andrea',
  desing: 'Julia',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

/// Padding
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));
console.log('food'.padEnd(12,'  -----'));


//****es9****
//-----------

// Spread Operator

const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX'
};

let { name, ...all } = obj;
console.log(name, all);


