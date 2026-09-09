# Librería de Utilidades - CI con Jenkins

![Build Status](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/juanjose0624/libreria-ci/main/badges/badge-build.json)
![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/juanjose0624/libreria-ci/main/badges/badge-coverage.json)

Librería de utilidades en JavaScript con 7 funciones (matemáticas y de texto), cada una con pruebas unitarias que cubren casos normales y casos límite/error.

Proyecto desarrollado como parte del **Problema 4 — Integración continua avanzada** (pruebas, cobertura de código y badges), usando Jenkins como pipeline de CI.

## Funciones incluidas

- `sumar(a, b)` — suma dos números
- `dividir(a, b)` — divide dos números (valida división por cero)
- `esPar(numero)` — verifica si un número es par
- `invertirTexto(texto)` — invierte una cadena de texto
- `factorial(n)` — calcula el factorial de un número
- `esPalindromo(texto)` — verifica si un texto es palíndromo
- `calcularPorcentaje(valor, total)` — calcula el porcentaje de un valor sobre un total

## Correr las pruebas localmente

```bash
npm install
npm test
```

## Pipeline de CI (Jenkins)

El `Jenkinsfile` define un pipeline con 6 etapas:

1. **Checkout** — clona el repositorio
2. **Build** — instala dependencias (`npm install`)
3. **Test con cobertura** — ejecuta las pruebas con Jest generando reporte de cobertura
4. **Quality Gate** — falla el pipeline si la cobertura de líneas es menor al 70%
5. **Publicar reporte** — publica el reporte de cobertura navegable desde Jenkins
6. **Generar badges** — actualiza los badges de build y cobertura visibles arriba
