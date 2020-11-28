/* function iterator(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}

const numbers = [1, 2, "hola", 4, 5];
const names = ["George", "Jonas", "Philip", "Andrew", "Carl"];

iterator(numbers);
iterator(names); */

function addition(a, b) {
  return a + b;
}

const resultaddition1 = addition(1, 2);
const resultaddition2 = addition(3, 4);
const resultaddition3 = addition(resultaddition1, resultaddition2);

console.log("result", resultaddition3);
