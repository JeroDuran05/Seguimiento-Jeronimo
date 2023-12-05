const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paresTradicionales = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

const paresFlecha = numeros.filter(numero => numero % 2 === 0);

console.log(paresTradicionales);
console.log(paresFlecha);
