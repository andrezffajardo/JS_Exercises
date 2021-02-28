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
  setTimeout(function () { // Deja pendiente por ejecutar la funcion, pasados los 4seg la pasa al Callback Queue y la pasa al Call Stack al estar este vacio
    let date = new Date; // Guarda la nueva fecha y hora pasados los 4seg
    callback(date); // Ejecuta el Callback que es un sinonimo de printDate
  }, 4000)
}

function printDate(dateNow) { // Se ejecuta por el callback que viene de la primera funcion
  console.log(dateNow);// Imprime la fecha y hora pasados 4seg que trae del setTimeout que esta dentro de la funcion date
}

date(printDate); // Ejecuta la función date que lleva como parametro otra funcion
// No necesariamente tiene que utilizar el parametro dentro de la funcion para ejecutarse


//console.log('Hi!!')

/* function date(callback) {
  console.log(new Date);
    let date = new Date;
    callback(date);
} */