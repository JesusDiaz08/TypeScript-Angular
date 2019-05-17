/**
 * @summary:    get - Se usa para obtener informacion
 *              set - Se usa para establecer informacion
 */
let permiso = true;
class Trabajador {
    get nombre_completo() {
        return this.nombre;
    }
    set colocar_nombre(nombre_) {
        if (permiso) {
            this.nombre = nombre_;
        }
        else {
            console.log('Sin permisos.');
        }
    }
}
let empleado = new Trabajador();
empleado.nombre = 'Horacio';
console.log(empleado.nombre_completo);
empleado.colocar_nombre = 'Roberto';
console.log(empleado.nombre_completo);
