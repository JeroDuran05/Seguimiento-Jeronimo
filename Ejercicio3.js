let totalCompra = 120;
let descuentoPorcentaje;

if (totalCompra >= 100 && totalCompra < 200) {
  descuentoPorcentaje = 10;
} else if (totalCompra >= 200 && totalCompra < 300) {
  descuentoPorcentaje = 15;
} else if (totalCompra >= 300) {
  descuentoPorcentaje = 20;
} else {
  descuentoPorcentaje = 0;
}

let descuento = (totalCompra * descuentoPorcentaje) / 100;

console.log(`Total de compra: $${totalCompra}`);
console.log(`Descuento aplicado: ${descuentoPorcentaje}%`);
console.log(`Monto del descuento: $${descuento}`);
console.log(`Total a pagar: $${totalCompra - descuento}`);
