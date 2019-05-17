/**
 * @name:           genericos
 * @description:    Es una plantilla que nos ayuda a reusar código.
 *                  Puedes ser:   
 *                      - Una funcion
 *                      - Una clase
 *                      - Una interfaz generica
 *                  Evitando colocar un tipo y, por tanto, el 'any'.
 */

let casas_de_HP:string[] = ['Gryffindor', 'Hufflepuf', 'Ravenclaw', 'Slytherin'];

function sombrero(todas_las_casas_de_HP:string[]):string {
    let indice_random:number = Math.floor(Math.random() * todas_las_casas_de_HP.length);
    return todas_las_casas_de_HP[indice_random];
}

let mi_casa:string = sombrero(casas_de_HP);
console.log('Bienvenido a ', mi_casa);

let materias:number[] = [20,14,12,33];
function materias_semestre(materias_:number[]):number{
    let indice_random:number = Math.floor(Math.random() * materias_.length);
    return materias_[indice_random];
}
let mis_materias = materias_semestre(materias);
console.log(`Debes de cursar ${mis_materias} materias.`);


/**
 * @summary:        La @function {sobrero} y {materias_semestre} son
 *                  esencia la misma. Para esto son necesarios los genericos.
 * 
 *                  Debemos de reusar el codigo sin perder 
 *                  la especificacion de los tipos.
 */
