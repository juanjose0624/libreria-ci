// tests/utilidades.test.js
const {
  sumar,
  dividir,
  esPar,
  invertirTexto,
  factorial,
  esPalindromo,
  calcularPorcentaje,
} = require('../src/utilidades');

describe('sumar', () => {
  test('suma dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('suma números negativos', () => {
    expect(sumar(-2, -3)).toBe(-5);
  });

  test('lanza error si un argumento no es número', () => {
    expect(() => sumar('a', 3)).toThrow(TypeError);
  });
});

describe('dividir', () => {
  test('divide dos números correctamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('lanza error al dividir por cero', () => {
    expect(() => dividir(10, 0)).toThrow('No se puede dividir por cero');
  });

  test('lanza error si un argumento no es número', () => {
    expect(() => dividir('10', 2)).toThrow(TypeError);
  });
});

describe('esPar', () => {
  test('detecta un número par', () => {
    expect(esPar(4)).toBe(true);
  });

  test('detecta un número impar', () => {
    expect(esPar(7)).toBe(false);
  });

  test('lanza error si no es un entero', () => {
    expect(() => esPar(3.5)).toThrow(TypeError);
  });
});

describe('invertirTexto', () => {
  test('invierte una palabra', () => {
    expect(invertirTexto('hola')).toBe('aloh');
  });

  test('invierte una cadena vacía', () => {
    expect(invertirTexto('')).toBe('');
  });

  test('lanza error si no es string', () => {
    expect(() => invertirTexto(123)).toThrow(TypeError);
  });
});

describe('factorial', () => {
  test('calcula el factorial de 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('el factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('lanza error con números negativos', () => {
    expect(() => factorial(-1)).toThrow(RangeError);
  });
});

describe('esPalindromo', () => {
  test('detecta un palíndromo simple', () => {
    expect(esPalindromo('reconocer')).toBe(true);
  });

  test('detecta que una frase no es palíndromo', () => {
    expect(esPalindromo('hola mundo')).toBe(false);
  });

  test('ignora espacios y mayúsculas', () => {
    expect(esPalindromo('Anita lava la tina')).toBe(true);
  });

  test('lanza error si no es string', () => {
    expect(() => esPalindromo(123)).toThrow(TypeError);
  });
});

describe('calcularPorcentaje', () => {
  test('calcula el porcentaje correctamente', () => {
    expect(calcularPorcentaje(25, 200)).toBe(12.5);
  });

  test('lanza error si el total es cero', () => {
    expect(() => calcularPorcentaje(10, 0)).toThrow('El total no puede ser cero');
  });

  test('lanza error si un argumento no es número', () => {
    expect(() => calcularPorcentaje('10', 100)).toThrow(TypeError);
  });
});