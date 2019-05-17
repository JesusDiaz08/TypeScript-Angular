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
 * @summary:    Los modificadores protegidos pueden
 *              ser accedidos desde las subclases y/o
 *              clases derivadas.
 */
var Instrumento = /** @class */ (function () {
    function Instrumento(nombre_) {
        this.nombre = nombre_;
    }
    return Instrumento;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre_) {
        var _this = _super.call(this, nombre_) || this;
        _this.de_cuerda = false;
        return _this;
    }
    Piano.prototype.getNombre = function () {
        console.log(this.nombre);
    };
    return Piano;
}(Instrumento));
var mi_piano = new Piano('Mi piano de cola');
mi_piano.getNombre();
