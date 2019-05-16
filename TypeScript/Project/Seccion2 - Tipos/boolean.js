'use strict';
/**
 * @description:    Para poder declarar variables utilizando el
 *                  tipado de TypeScript, lo hacemos de la siguiente
 *                  manera:
 *
 *                  let nombreVariable:tipoDato = valor;
 *
 *                  Esto solamente se usa en el ambiente de TypeScript
 */
var soy_alto = true;
var soy_fan = false;
//soy_alto = 20;
console.log(soy_alto, 'Soy alto');
console.log(soy_fan, 'Soy fan');
//Operador de conjuncion
console.log(soy_alto && soy_fan, 'Conjuncion');
//Operador de disyuncion
console.log(soy_fan || soy_alto, 'Disyuncion');
