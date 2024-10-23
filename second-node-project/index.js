const prompt = require('prompt-sync')();

let nombres = [];


while (true) {
  const nombre = prompt('Ingresa un nombre (o presiona enter para terminar): ');

  if (nombre === '') {
    break;
  }

  nombres.push(nombre);
}

const cantidadNombres = nombres.length;
const tieneRepetidos = new Set(nombres).size !== nombres.length;

// Asegurarse de que hay nombres antes de calcular el más largo y el más corto
if (cantidadNombres > 0) {
  const nombreMasLargo = nombres.reduce((a, b) => a.length > b.length ? a : b);
  const nombreMasCorto = nombres.reduce((a, b) => a.length < b.length ? a : b);

  console.log(`\nCantidad de nombres ingresados: ${cantidadNombres}`);
  console.log(`¿Hay nombres repetidos?: ${tieneRepetidos ? 'Sí' : 'No'}`);
  console.log(`Nombre más largo: ${nombreMasLargo}`);
  console.log(`Nombre más corto: ${nombreMasCorto}`);
} else {
  console.log('No se ingresaron nombres.');
}
