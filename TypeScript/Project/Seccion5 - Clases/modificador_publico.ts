class Persona{
    public nombre:string;

    public constructor(nombre_:string){
        this.nombre = nombre_;
    }

    public hablar(mensaje:string):void {
        console.log('Mensaje: ',mensaje);
    }
}

let instance = new Persona('Jadee');
console.log(instance.nombre);
instance.hablar('Hola');