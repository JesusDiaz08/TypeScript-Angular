'use strict'

/**
 * @summary     Multiples decoradores se pueden aplicar a los objetos.
 */

function entrando( clase: Object ){
    console.log('First decorator.');
}

function imprimiendo( clase: Object ){
    console.log('Second decorator');
}

/**
 * Composion de decoradores
 */
// Ambos decoradores se aplican al obetio Animal.
// Puede declararse tambien como: @entrando @imprimiendo
@entrando   
@imprimiendo
class Animal{
    raza:string = 'Perro';
}

let mi_mascota:Animal = new Animal()
