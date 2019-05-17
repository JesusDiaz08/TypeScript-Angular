var Jugador = /** @class */ (function () {
    function Jugador(posicion_) {
        this.posicion = posicion_;
    }
    Jugador.prototype.getPosicion = function () {
        console.log('Posicion: ', this.posicion);
        this.modifyPosicionPrivate();
        console.log('Posicion: ', this.posicion);
    };
    Jugador.prototype.modifyPosicionPrivate = function () {
        this.posicion = 'Arquero';
    };
    return Jugador;
}());
var Ronaldo = new Jugador('Delantero');
Ronaldo.getPosicion();
