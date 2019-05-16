'use strict'

/**
 * @name:           Listas
 * @description:    Para poder crear listas, se utiliza
 *                  la siguiente nomenclatura:
 *  
 *                  Forma 01.
 *                  let nameVariable: type[] = [value1,value2,...,valueN];
 *                  
 *                  Forma 02.
 *                  let nameVariable: Array <type> = [value1,value2,...,valueN];
 */

//Forma 01
let mi_lista = [1,2,3,5,6]; // JavaScript
let mis_numeros: number[] = [1,2,4,5,7];    // TypeScript

//Forma 02
let mis_notas: Array <number> = [10,10,9,9,9];

mis_numeros.push(9);
//mis_numeros.push('Pogba');  // TypeScript utiliza su fuerza tipada

let mi_equipo: Array <string> = ['Casillas', 'Pele', 'Gatuso', 'Ronaldo'];
mi_equipo.push('Pogba');

console.log(mi_equipo);
console.log(mi_equipo.length);
console.log(mi_equipo[0]);