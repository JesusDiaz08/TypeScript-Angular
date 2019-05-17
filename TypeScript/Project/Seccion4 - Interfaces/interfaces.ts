'use strict'

/**
 * @name:           Interfaces
 * @description:    Serie de propiedades y metodos, las cuales los
 *                  objetos que pertenecen a dicha interfaz, deben
 *                  de poseer.
 * 
 *                  interface nameInterface{
 *                      nameAttribute:type;
 *                      nameMethod: (param:type, param:type):typeReturn => { ... content ... }
 *                  }
 * 
 *                  Estas sirven como plantillas para objetos que se 
 *                  van a crear bajo ese nombre.
 */

interface Perro{
    nombre: string; //Atributo
}

function adoptar(mascota:Perro):void{
    console.log(`Yo adopté a ${mascota.nombre}`);
}

let mascotaA = {nombre:"Toby", raza:"Pitbull"};       // Es un objeto
let mascotaB: Perro = {nombre: "Canelo"};           // Debe de cumplir con los atributos de la interfaz
adoptar(mascotaA);
adoptar(mascotaB);