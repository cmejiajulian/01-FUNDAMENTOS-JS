const elMayor = (a,b) => {
    return(a>b)?a:b;
}
console.log(elMayor(10,15));


const tieneMembresia = (miembro) => (miembro) ? 'tiene membresia  y paga 2 USD':'no tiene membresia y paga 10 USD';
console.log(tieneMembresia(true)); 


const amigo = true 
const amigoArr = [
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor':'Loki',
    (()=>'Nick Fury')(),//funcion anonima auto invocada
    elMayor(1,5)
];

console.log(amigoArr); 


const nota = 85;// A+ A B+ 
const calificacion = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' :'F';


console.log({nota,calificacion});