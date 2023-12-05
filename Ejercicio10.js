let mapa = new Map();

mapa.set('clave1', 'valor1');
mapa.set(2, 'valor2');
mapa.set({ objeto: true }, 'valor3');

console.log(mapa.get('clave1'));          
console.log(mapa.get(2));                 
console.log(mapa.get({ objeto: true }));

let conjunto = new Set();

conjunto.add('elemento1');
conjunto.add(2);
conjunto.add('elemento1');

console.log(conjunto.size);
