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
