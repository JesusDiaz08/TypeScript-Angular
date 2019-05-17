'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @summary:    Funciona como una plantilla y tambien
 *              Siempre funciona como una super clase.
 *              No puede ser instanciada directamente
 *              Sirve como plantillad de gui
 */
var SuperClase = /** @class */ (function () {
    function SuperClase() {
    }
    SuperClase.prototype.saludar = function () {
        console.log('Hola');
    };
    return SuperClase;
}());
var claseDerivada = /** @class */ (function (_super) {
    __extends(claseDerivada, _super);
    function claseDerivada() {
        return _super.call(this) || this;
    }
    claseDerivada.prototype.metodo_a_sobreescribir = function () {
        console.log('Código nuevo');
    };
    return claseDerivada;
}(SuperClase));
var instancia = new claseDerivada();
instancia.saludar();
instancia.metodo_a_sobreescribir();
