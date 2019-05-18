/**
 *
 * @description:        Las funciones de flecha resulven problemas
 *                      como los que se presentan en la funcion
 *                      'problema'.
 */
var miFuncion = function (a) {
    return a;
};
// let nameFunA = (parametro1DeFuncionB, parametro2DeFuncionB) => retornoFuncionB 
var miFuncion_flecha = function (a) { return a; };
console.log(miFuncion('Normal'));
console.log(miFuncion_flecha('Flecha'));
var miFuncion2 = function (a, b) {
    return a * b;
};
var miFuncion2_flecha = function (a, b) { return a * b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3_flecha = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var nombre = 'Pedro';
var hulk = {
    nombre: 'Bruce',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!"); }, 1500);
    }
};
hulk.smash();
