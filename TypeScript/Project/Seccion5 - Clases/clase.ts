'use strict'

/**
 * @name:           Clase
 * @description:    Es una plantilla para la creacion de objetos
 *                  que comparten un modelo predefinido.
 * 
 *                  La idea es representar una entidad o un 
 *                  concepto general.
 *                  
 */
class Vehiculo{
    // Atributos o propiedades declaradas solamente.
    marca:string;
    fecha_creacion:string;
    color:string;
    puertas:number;
    kilometraje:number = 0;

    constructor(marca_:string, fecha_creacion_:string, color_:string, puertas_:number){
        console.log(this, "This antes de inicializar.");
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;

        console.log(this, "This despues de inicializar");
    } 
    
    avanzar(){
        this.kilometraje = this.kilometraje + 100;
    }
}

let mi_vehiculo = new Vehiculo("Ford","1998","Rojo",4);

// Acceder a un atributo
console.log("Kilometraje antes de avanzar: ", mi_vehiculo.kilometraje);
// Acceder a un metodo
mi_vehiculo.avanzar();  mi_vehiculo.avanzar();  mi_vehiculo.avanzar();

console.log("Kilometraje despues de avanzar: ", mi_vehiculo.kilometraje);


let carroB = new Vehiculo('Nissan', '2006', 'Blanco', 2);

console.log(`
Un carro de ${mi_vehiculo.marca} tiene ${mi_vehiculo.puertas} puertas y 
Un carro de ${carroB.marca} tiene ${carroB.puertas} puertas.`);
