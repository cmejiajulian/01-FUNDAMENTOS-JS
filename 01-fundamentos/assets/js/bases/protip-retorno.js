function crearPersona ( nombre, apellido ){
    return{
        nombre: nombre,
        apellido:apellido
    }
}
const tuNombre = crearPersona('julian','Cañas')
console.log(tuNombre);


//FUNCION CREAR PERSONA RESUMIDA A FLECHA 


const crearPersona2 =(nombre,apellido)=>({nombre,apellido});// se encierra en corchetes para determinar el arreglo 
const tuNombre2 = crearPersona2('Julian','Cañas');
console.log(tuNombre2);


const imprimeArgumentos = (edad,...args) =>{

    //console.log({edad,args})
return args;

}

const [casado,vivo,nombre,saludo]= imprimeArgumentos(10,true,false,'julian','hola');
console.log({casado,vivo,nombre,saludo});


//EJEMPLO CON OBJETO destructuracion de argumentos 

let tony = {
    nombre:'Tony Stark',
    codeName:'Iroman',
    vivo:false,
    edad:45,
    trajes:['Mar I','Mark V','HulkBuster'],
 };

//  const imprimePropiedades = ( personaje ) => {

    //  console.log('nombre',personaje.nombre);
    //  console.log('code',personaje.codeName);
    //  console.log('vivo',personaje.vivo);
    //  console.log('edad',personaje.edad);
    //  console.log('trajes',personaje.trajes);

//  }

const imprimePropiedades = ({nombre,codeName,vivo,edad,trajes}) => {
    
    //Crlt + D
    
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
    


}

 imprimePropiedades(tony)