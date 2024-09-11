
//OBJETOS LITERALES {}
let personaje = {
   nombre:'Tony Stark',
   codeName:'Iroman',
   vivo:false,
   edad:45,
   coords:{
    lat:34.034,
    lng:-118.70
   },
   trajes:['Mar I','Mark V','HulkBuster'],
   direccion:{
    zip:'10800,90265',
    ubicacion:'Manizales, Caldas '
   },
   'ultima-Pelicula':'Infinity War',

};

console.log(personaje);

console.log('Nombre:', personaje.nombre,);

console.log('Nombre:', personaje['nombre']);

console.log('Edad:', personaje.edad);

console.log('Coordenadas:',personaje.coords);


console.log('Latitud:',personaje.coords.lat);

console.log('Numero de trajes:',personaje.trajes.length);

console.log('Ultimo Traje:',personaje.trajes[personaje.trajes.length-1]);

console.log('Posicion Ultimo Traje:',personaje.trajes.indexOf('HulkBuster'))

const x = 'vivo';
console.log('Vivo:',personaje[x])

console.log('Esta Vivo:', personaje.vivo);

console.log('Ultima Pelicula:', personaje['ultima-Pelicula']);


//MAS DETALLES 

personaje.edad = null;

console.log(personaje);

// BORRAR UN ELEMENTO DEL ARREGLO 

delete personaje.edad

console.log( personaje);


//

personaje.casado = true;

//PONER UN ARREGLO EN OBJETO entries

const entriesPares = Object.entries( personaje);
console.log(entriesPares);


// CONGELA EL OBJETO EN EL PUNTO DETERMINADO object.freeze 

Object.freeze(personaje);


personaje.dinero = 100000000000;
personaje.casado = true
personaje.direccion.ubicacion = 'Minca'// se puede cambiar 
console.log(personaje);


// COMBIERTE EN ARREGLO EL OBJETO CREADO Object.getOwnPropertyNames
const propiedades = Object.getOwnPropertyNames( personaje)
//NOS DA LOS VALORES DE UN OBJETO
const valores = Object.values(personaje);

console.log(propiedades);
console.log(valores);