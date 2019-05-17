class Jugador{
    private posicion:string;

    public constructor(posicion_:string){
        this.posicion = posicion_;
    }

    public getPosicion():void{
        console.log('Posicion: ', this.posicion);
        this.modifyPosicionPrivate();
        console.log('Posicion: ', this.posicion);
    }

    private modifyPosicionPrivate():void{
        this.posicion = 'Arquero';
    }
}

let Ronaldo = new Jugador('Delantero');
Ronaldo.getPosicion();