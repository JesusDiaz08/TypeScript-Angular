'use strict';
/**
 * @name:           Funciones en TypeScript
 * @description:    La declaracion de funciones se
 *                  hace de la siguiente forma:
 *
 *                  function nameFunction(param:type):typeReturn{
 *
 *                  }
 */
function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(2, 4);
console.log('Producto: ', producto);
var sumatoria = 0;
console.log("Sumatoria antes: ", sumatoria);
function sumar() {
    sumatoria++;
}
sumar();
console.log("Sumatoria despues: ", sumatoria);
