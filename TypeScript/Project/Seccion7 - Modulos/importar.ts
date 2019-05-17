/**
    import { PI } from './exportar' ;      // Asi se importa.
    import { saludar, Jugador, Mascota } from './exportar'
    import { palabras } from './exportar'
**/
import * as paquete from './exportar';

console.log(paquete.PI);
paquete.saludar();

let messi:paquete.Jugador = new paquete.Jugador();
messi.nombre = 'Messi';
let zeus:paquete.Mascota = {nombre: 'Zeus'};

console.log(messi, zeus);

paquete.palabras();

//Importar por default
import periodista from './default';
console.log(periodista.nombre + " " + periodista.apellido);
periodista.preguntar('¿Que edad tienes?');