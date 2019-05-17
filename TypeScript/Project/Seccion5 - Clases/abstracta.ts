'use strict'

/**
 * @summary:    Funciona como una plantilla y tambien
 *              Siempre funciona como una super clase.
 *              No puede ser instanciada directamente
 *              Sirve como plantillad de gui
 */

abstract class SuperClase{
    // Es solamente una plantilla.
    abstract metodo_a_sobreescribir():void;
    saludar():void{
        console.log('Hola');
    }
}

class claseDerivada extends SuperClase{
    
    constructor(){
        super();
    }

    metodo_a_sobreescribir():void{
        console.log('Código nuevo');
    }
}

let instancia = new claseDerivada();
instancia.saludar();
instancia.metodo_a_sobreescribir();