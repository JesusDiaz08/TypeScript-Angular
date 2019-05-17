'use strict';
var Unificador = /** @class */ (function () {
    function Unificador() {
    }
    return Unificador;
}());
// T simboliza un numero
var mi_unificador = new Unificador();
mi_unificador.valor = 20;
mi_unificador.sumar = function (valorA_, valorB_) { return valorA_ + valorB_; };
console.log(mi_unificador.sumar(2, 3));
console.log(mi_unificador.valor);
// T simboliza un numero
var mi_unificador2 = new Unificador();
mi_unificador2.valor = '20';
mi_unificador2.sumar = function (valorA_, valorB_) { return valorA_ + valorB_; };
console.log(mi_unificador2.sumar('2', '3'));
console.log(mi_unificador2.valor);
