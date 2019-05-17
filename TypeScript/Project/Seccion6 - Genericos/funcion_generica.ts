'use strict'

function elemento_random<T>(lista:T[]):T{
    let indice_random:number = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}

// T en este ejemplo simboliza un numero
let numeros:number[] = [1,3,5,8,6,2];
let mi_numero:number = elemento_random(numeros);
console.log(`Tu numero es: ${mi_numero}`);

// T en este ejemplo simboliza un string
let letras:string[] = ['a', 'e', 'i', 'o', 'u'];
let mi_letra:string = elemento_random(letras);
console.log(`Tu letra es: ${mi_letra}`); 

/**
 * @summary:    ¡OJO! ---> Si utilizaramos any
 */
function elemento_random2(lista:any[]):any{
    let indice_random:number = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}

// T en este ejemplo simboliza un string
let letras2:string[] = ['a', 'e', 'i', 'o', 'u'];
let mi_letra2:number = elemento_random2(letras); // -> ESTO ES UN ERRO!
console.log(`Tu letra es: ${mi_letra}`); 