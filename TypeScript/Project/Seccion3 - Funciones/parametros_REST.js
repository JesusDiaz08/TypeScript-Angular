'use strict';
/**
 * @name:           Parametros REST.
 * @description     La nomenclatura para los parametros REST
 *                  es la que a continuación se muestra:
 *
 *                  function nameFunc(param:type, ...param:type[]): typeReturn{}
 */
function deporte(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    console.log(deportes);
    return "A " + persona + " le gustan los siguientes deportes: \n        " + deportes.join(',') + "\n    ";
}
console.log(deporte('Juan', 'Beisbol', 'Futbol', 'Tennis'));
function ejemplo(requerido, defaultt, opcional) {
    if (defaultt === void 0) { defaultt = 'sth'; }
}
