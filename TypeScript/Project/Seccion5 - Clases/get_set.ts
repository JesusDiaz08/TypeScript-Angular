/**
 * @summary:    get - Se usa para obtener informacion
 *              set - Se usa para establecer informacion
 */
let permiso:boolean = true;
class Trabajador{
    nombre:string;

    get nombre_completo():string{
        return this.nombre;
    }

    set colocar_nombre(nombre_:string){
        if (permiso){
            this.nombre = nombre_;
        }else{
            console.log('Sin permisos.');
        }
    }
}

let empleado = new Trabajador();
empleado.nombre = 'Horacio';
console.log(empleado.nombre_completo);

empleado.colocar_nombre = 'Roberto';
console.log(empleado.nombre_completo);