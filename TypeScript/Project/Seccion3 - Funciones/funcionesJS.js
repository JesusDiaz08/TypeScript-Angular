'use strict';
function multiply(a, b) {
    return a * b;
}
var result = multiply(2, 6);
console.log("Resultado: ", result);
var count = 100;
function incrementCount(alpha, count) {
    console.log("Valor de la cuenta dentro de funcion: ", count);
    count = count + alpha;
    console.log("Valor de la cuenta dentro de funcion: ", count);
}
incrementCount(20, 50);
console.log(count);
