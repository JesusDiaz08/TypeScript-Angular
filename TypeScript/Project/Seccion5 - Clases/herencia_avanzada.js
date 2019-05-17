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
var Animal_ = /** @class */ (function () {
    function Animal_(nombre_) {
        // console.log('Constructor de Animal_');
        this.nombre = nombre_;
    }
    Animal_.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " recorre " + distancia + " metros.");
    };
    return Animal_;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre_, longitud_) {
        var _this = 
        // console.log('Constructor serpiente.');
        _super.call(this, nombre_) || this;
        _this.longitud = longitud_;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("Deslizando....");
        _super.prototype.caminar.call(this, distancia);
    };
    return Serpiente;
}(Animal_));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre_) {
        // console.log('Constructor caballo.');
        return _super.call(this, nombre_) || this;
    }
    return Caballo;
}(Animal_));
var sam = new Serpiente('Sam - La serpiente', 23);
var zeus = new Caballo('Zeus - El caballo');
sam.caminar();
console.log(sam.longitud);
zeus.caminar(8);
