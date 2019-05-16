'use strict'

/**
 * @name:           Tuplas
 * @description     Es una lista ordenada de elementos.
 *                  Cada elemento tiene un orden y DEBE RESPETARSE.
 *                  Cada elemento de la tupla DEBE TENER UN TIPO
 */

let vectorA: [number, number];
let vectorB: [number, number];

//  Inicializamos los vectores.
vectorA = [2,5];
vectorB = [5,2];

let vectorResultante: [number, number];
// Sumamos los vectores.
let X:number = vectorA[0] + vectorB[0];
let Y:number = vectorA[1] + vectorB[1]
vectorResultante = [X, Y];

console.log(vectorResultante);

/**
 * @summary:    Podemos especificar la cantidad de elementos de la tupla
 *              de la siguiente manera.
 * 
 *              let nameVar: [type,type,....,type] = [value,value,....,value];
 * 
 *              NOTA: El mismo numero de elementos que hayamos asignado en la
 *                    tupla, es el mismo numero de valores que la tupla debe tener.
 * 
 *              NOTA: Una tupla puede contener elementos de distintos tipos.
 * 
 */
let tupla_de_5: [number, number, number, number, number] = [1,2,3,4,5];
let profesor: [string, number, boolean] = ['Jaime', 33, true];
let student: [string, number] = ["Xavier", 1.80];

console.log(`${student[0]} mide ${student[1]} metros.`);