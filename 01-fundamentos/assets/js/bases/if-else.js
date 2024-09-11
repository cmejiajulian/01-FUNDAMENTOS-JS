let a = 5 

if (a >= 10) {
    console.log('A es Mayor a 10');
}
else {
    console.log('Es menor a 10')
}

// console.log('Fin del programa');

const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});


//PROGRAMA 1 

if ( dia === '4'){
    console.log('Hoy es jueves')
}
else{
    console.log('Hoy no es jueves')
}


//PROGRAMA 2

if (dia == '5'){
    console.log('es viernes');
}else{

      if(dia =='8'){
        console.log('es viernes');
     }
     else{
        console.log('No es el dia');
     }
}

//PROGRAMA 3 RESUMIDO 

if (dia == 3){
    console.log('es miercoles');
}
else if (dia == 4){
    console.log( 'Es jueves');
}
else {
    console.log('No es ninguno de los dias');
}

//SIN USAR if else o Switch unicamente objetos
 
//FORMA 1
 let diaSemana = {
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'Sabado',
    0:'Domingo',
   

 }

 console.log(diaSemana[dia]);

 //FORMA 2
 const diaSemana2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',];

 console.log(diaSemana2[dia]);