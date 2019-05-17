'use strict'

class Unificador<T>{
    valor: T;
    sumar: (valorA: T, valorB: T) => T;
}

// T simboliza un numero
let mi_unificador = new Unificador<number>();
mi_unificador.valor = 20;
mi_unificador.sumar = function(valorA_, valorB_) { return valorA_ +  valorB_; };
console.log(mi_unificador.sumar(2,3));
console.log(mi_unificador.valor);

// T simboliza un numero
let mi_unificador2 = new Unificador<string>();
mi_unificador2.valor = '20';
mi_unificador2.sumar = function(valorA_, valorB_) { return valorA_ +  valorB_; };
console.log(mi_unificador2.sumar('2','3'));
console.log(mi_unificador2.valor);