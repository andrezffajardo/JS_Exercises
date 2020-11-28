function iterator(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}

const numbers = [1, 2, "hola", 4, 5];
const names = ["George", "Jonas", "Philip", "Andrew", "Carl"];

iterator(numbers);
iterator(names);
