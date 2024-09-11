/**
 * Dias de semana abrimos a las 11,
 * Pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy ...

const dia = 6; // 0:domingo ... 1:lunes
const horaActual = 11;



let horaApertura;
let mensaje; // Esta abierto, esta cerrado , hoy abrimos a las XX

// primera forma tradicional

if ( dia === 0 || dia === 6 ){
    console.log( ' El fin de semana abrimos a las 9')
    horaApertura = 9;
}
else {
    console.log('Dia de semana');
    horaApertura = 11;
}


if ( horaActual >= horaApertura){
    mensaje = ' Esta abierto '
}else{
   mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`
}
console.log({horaApertura,mensaje})

// segunda forma nueva

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje = (horaActual>=horaApertura)?' esta abierto':`esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje})

