'use strict';
exports.__esModule = true;
var Periodista = /** @class */ (function () {
    function Periodista() {
    }
    Periodista.prototype.preguntar = function (mensaje) {
        console.log('Mensaje: ', mensaje);
    };
    return Periodista;
}());
var periodista = new Periodista();
periodista.nombre = 'Xavier';
periodista.apellido = 'Ramirez';
// Vamos a exportar a periodista por default.
exports["default"] = periodista;
