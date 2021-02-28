//Example Callback 1

function sum(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}


function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 6, sum))
console.log(calc(5, 8, mult))

// Example Callback 2

function date(callback) {
  console.log(new Date);  // Muestra la primera fecha y hora
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 4000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate); // Ejecuta la función date que lleva como parametro otra funcion
// No necesariamente tiene que utilizar el parametro dentro de la funcion para ejecutarse


//console.log('Hi!!')

/* function date(callback) {
  console.log(new Date);
    let date = new Date;
    callback(date);
} */