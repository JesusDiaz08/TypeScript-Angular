/**
 * @summary:    Debo implementar los mismo atributos y los
 *              mismos metodos que la interfaz tiene.
 */

interface DatosPersonales{
    nombre:string;
    apellido:string;
}

class Estudiante implements DatosPersonales{
    public nombre:string;
    public apellido:string;
}

let student = new Estudiante();
student.nombre = 'David';
student.apellido = 'Romero';

console.log(student);