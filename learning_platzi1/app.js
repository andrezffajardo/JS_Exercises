var items = [
  { name: "Bicicleta", cost: 3000 },
  { name: "TV", cost: 2000 },
  { name: "Libro", cost: 320 },
  { name: "Celular", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Audifonos", cost: 1500 },
  { name: "Teclado", cost: 500 },
];

/*var itemsFilt = items.filter(function (item) {
  return item.cost <= 500;
});

console.log(itemsFilt);*/

/*var nameitems = items.map(function (item) {
  return item.name;
});

console.log(nameitems);*/

/*var findItem = items.find(function (item) {
  return item.name === "Laptop";
});

console.log(findItem);*/

/*items.forEach(function (item) {
  console.log(item.name);
});*/

var cheapItems = items.some(function (item) {
  return item.cost <= 600;
});

console.log(cheapItems);
