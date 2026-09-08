// src/utilidades.js

function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Ambos argumentos deben ser números');
  }
  return a + b;
}

function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Ambos argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

function esPar(numero) {
  if (!Number.isInteger(numero)) {
    throw new TypeError('El valor debe ser un número entero');
  }
  return numero % 2 === 0;
}

function invertirTexto(texto) {
  if (typeof texto !== 'string') {
    throw new TypeError('El valor debe ser una cadena de texto');
  }
  return texto.split('').reverse().join('');
}

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('El número debe ser un entero no negativo');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function esPalindromo(texto) {
  if (typeof texto !== 'string') {
    throw new TypeError('El valor debe ser una cadena de texto');
  }
  const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  return limpio === limpio.split('').reverse().join('');
}

function calcularPorcentaje(valor, total) {
  if (typeof valor !== 'number' || typeof total !== 'number') {
    throw new TypeError('Ambos argumentos deben ser números');
  }
  if (total === 0) {
    throw new Error('El total no puede ser cero');
  }
  return (valor / total) * 100;
}

module.exports = {
  sumar,
  dividir,
  esPar,
  invertirTexto,
  factorial,
  esPalindromo,
  calcularPorcentaje,
};