let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo: ',juegos.length);

let primero = juegos[2-2];
let utlimo = juegos [juegos.length - 1];

console.log({primero,utlimo});


//for.Each Barre los elementos 
//Ejemplo

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr})
})



// {elemento: 'Zelda', indice: 0, arr: Array(4)}

// {elemento: 'Mario', indice: 1, arr: Array(4)}

// {elemento: 'Metroid', indice: 2, arr: Array(4)}

// {elemento: 'Chrono', indice: 3, arr: Array(4)}


 //AÑADIR NUEVO ELEMENTO push
 let nuevaLongitud = juegos.push('F-Zero');
 console.log({nuevaLongitud,juegos})

 //INSERTA UN NUEVO ELEMENTO AL PRINCIPIO DEL ARREGLO unshift 


let nuevaLongitud1 =  juegos.unshift('FIfa');;
console.log({nuevaLongitud1,juegos});

//ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO pop
let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

//ELIMINA LOS ELEMENTOS DE ACUERDO A LA POSICION QUE SE LE INDIQUE pos

console.log(juegos);

let pos = 1;

let juegosBorrados2 = juegos.splice(pos,2);

console.log({juegosBorrados2,juegos});

//INDICA EN QUE PARTE ESTA EL ELEMENTO indexOf

let MetroidIndex = juegos.indexOf('Metroid');
console.log({MetroidIndex})
