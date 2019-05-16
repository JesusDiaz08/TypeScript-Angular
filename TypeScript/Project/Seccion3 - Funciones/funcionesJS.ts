'use strict'

function multiply(a, b){
    return a * b;
}

let result = multiply(2,6);
console.log("Resultado: ", result);

let count = 100;

function incrementCount(alpha){
    let count = 3;
    console.log("Valor de la cuenta dentro de funcion: ", count)
    count = count + alpha;
    console.log("Valor de la cuenta dentro de funcion: ", count)
}

incrementCount(20);
console.log(count);