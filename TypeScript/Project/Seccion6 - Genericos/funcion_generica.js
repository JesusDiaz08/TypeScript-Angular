'use strict';
function elemento_random(lista) {
    var indice_random = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}
// T en este ejemplo simboliza un numero
var numeros = [1, 3, 5, 8, 6, 2];
var mi_numero = elemento_random(numeros);
console.log("Tu numero es: " + mi_numero);
// T en este ejemplo simboliza un string
var letras = ['a', 'e', 'i', 'o', 'u'];
var mi_letra = elemento_random(letras);
console.log("Tu letra es: " + mi_letra);
/**
 * @summary:    ¡OJO! ---> Si utilizaramos any
 */
function elemento_random2(lista) {
    var indice_random = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}
// T en este ejemplo simboliza un string
var letras2 = ['a', 'e', 'i', 'o', 'u'];
var mi_letra2 = elemento_random2(letras); // -> ESTO ES UN ERRO!
console.log("Tu letra es: " + mi_letra);
