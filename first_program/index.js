console.log("Hola Mundo");
let myfirstvariable = "My First Variable!";
// console.log(myfirstvariable);

// mutability
myfirstvariable = "It's Change";
// console.log(myfirstvariable);

// boolean
let myBoolean = true;
let myOtherBool = false;

let myNumber = 0;
let myNumber2 = 12;
let myNumber3 = -258;

/// console.log(myNumber, myNumber2, myBoolean, myfirstvariable);

let undef;
// console.log(undef);

let nulo = null;

// console.log(nulo);

// Object empty

const myFirstObject = {};

// Object
const myObject = {
  aNumber: 12,
  aString: "A character string",
  aCondition: true,
};

// console.log(myObject.aString);

// array
const arrEmpty = [];
const arr = [1, 2, "Hola", "Mundo", myObject];

// console.log(arrEmpty, arr);

// arr.push(5);

// console.log(arr);

arrEmpty.push(5);
arrEmpty.push(3);
arrEmpty.push(1);
arrEmpty.push("Hola");
arrEmpty.push(myfirstvariable);

// console.log(arrEmpty);

const suma = 1 + 2;
const restar = 1 - 2;
const multiplicar = 2 * 3;
const division = 9 / 3;

// console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3;
// console.log(modulo);

let num = 5;
//num++;
//num++;
//num++;
//num++;
//num++;

//num--;
//num--;
//num--;
//num--;
//num--;

num += 5;
num -= 5;
num *= 5;
num /= 2;

// console.log(num);

// comparison operators

const res1 = 5 === 6;
const res2 = 5 == "5";

const res3 = 5 < 6;
const res4 = 5 < 5;
const res5 = 5 > 6;
const res6 = 5 > 4;
const res7 = 5 <= 5;
const res8 = 5 <= 6;
const res9 = 5 >= 5;
const res10 = 5 >= 6;

const res11 = 5 !== "5";
const res12 = 5 != "5";

console.log(res3, res4, res5, res6, res7, res8, res9, res10, res11, res12);
