'use strict'

/**
 * @name:           interface_opcional
 * @description:    Se van a pedir atributos opcionales.
 */

interface Casa{
    ancho: number;
    largo: number;
    // ATRIBUTO ALTO ES OPCIONAL
    alto?: number;   
}

function dimensiones(medidas:Casa):string{
    let area:number = medidas.ancho * medidas.largo;
    if(medidas.alto){
        return `El área de tu casa es ${area} mts y de alto ${medidas.alto} mts`;
    }else{
        return `El área de tu casa es ${area} mts`;
    }
}

console.log( dimensiones( { ancho:10, largo:12, alto:3 } ) );
console.log( dimensiones( { ancho:10, largo:12 } ) );