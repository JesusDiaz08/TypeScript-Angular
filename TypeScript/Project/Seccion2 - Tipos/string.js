'use strict';
var peliculas = 'Una mente maravillosa';
var series = "Sherlock";
/**
 * @name:           Template String
 * @description:    Permite hacer cadenas multilinea
 *
 */
var poema = "khjdskjhhdskjdhakjhdkjdas\nhjdjhkdsahkjdsahkjdhkjdsahkjdsa\nhjdsjhdjghdhjgdsahjgdsahjgdsa";
// Operaciones
var programas = "Mis programas favoritos son: " + peliculas + " y " + series;
console.log(programas);
//Template String
var programas2 = "\n    Mis programas favoritos son " + peliculas + " y " + series + "\n";
console.log(programas2);
var edad = 22;
var edad_futura = "\n    El siguiente a\u00F1o mi edad ser\u00E1 de " + (edad + 1) + "\n";
console.log(edad_futura);
// Metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
