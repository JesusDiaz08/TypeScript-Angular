'use strict'

let peliculas: string = 'Una mente maravillosa';
let series: string = "Sherlock";

/**
 * @name:           Template String
 * @description:    Permite hacer cadenas multilinea
 * 
 */
let poema: string = `khjdskjhhdskjdhakjhdkjdas
hjdjhkdsahkjdsahkjdhkjdsahkjdsa
hjdsjhdjghdhjgdsahjgdsahjgdsa`;

// Operaciones
let programas: string = "Mis programas favoritos son: " + peliculas + " y " + series;
console.log(programas);

//Template String
let programas2: string = `
    Mis programas favoritos son ${peliculas} y ${series}
`;
console.log(programas2);

let edad: number = 22;
let edad_futura: string = `
    El siguiente año mi edad será de ${edad + 1}
`;

console.log(edad_futura);


// Metodos
console.log(programas.charAt(0));   // En la posicion 0
console.log(programas.toUpperCase()); // Las convierte a mayusculas