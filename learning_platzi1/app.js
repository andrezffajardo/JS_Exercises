var items = [
  { name: "Bicicleta", cost: 3000 },
  { name: "TV", cost: 2000 },
  { name: "Libro", cost: 320 },
  { name: "Celular", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Audifonos", cost: 1500 },
  { name: "Teclado", cost: 500 },
];

var itemsFilt = items.filter(function (item) {
  return item.cost <= 500;
});

console.log(itemsFilt);
