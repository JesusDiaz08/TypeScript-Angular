'use strict';
/**
 * @name:           Tuplas
 * @description     Es una lista ordenada de elementos.
 *                  Cada elemento tiene un orden y DEBE RESPETARSE.
 *                  Cada elemento de la tupla DEBE TENER UN TIPO
 */
var vectorA;
var vectorB;
//  Inicializamos los vectores.
vectorA = [2, 5];
vectorB = [5, 2];
var vectorResultante;
// Sumamos los vectores.
var X = vectorA[0] + vectorB[0];
var Y = vectorA[1] + vectorB[1];
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
 *              NOTA: Una tupla puede contener elementos de distintos tipos.
 *
 */
var tupla_de_5 = [1, 2, 3, 4, 5];
var profesor = ['Jaime', 33, true];
var student = ["Xavier", 1.80];
console.log(student[0] + " mide " + student[1] + " metros.");
