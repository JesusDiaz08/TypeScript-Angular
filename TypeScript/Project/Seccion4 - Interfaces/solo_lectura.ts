'use strict'

/**
 * @name:           solo lectura
 * @description:    interface Punto{
                        readonly nameVariable: type;
                        readonly nameVariable: type;
                    }
                    Al utilizar 'readonly' solamente puede
                    ser inicializado una única vez.
 */
interface Punto{
    x: number;
    readonly y: number;
}

let punto:Punto = { x:21, y:64 };
console.log(punto);
console.log(`1. Coordenada X del punto = ${punto.x}`);
console.log(`Coordenada Y del punto = ${punto.y}`);
punto.x = 12;
console.log(`2. Coordenada X del punto = ${punto.x}`);
// punto.y = 12;    // Error