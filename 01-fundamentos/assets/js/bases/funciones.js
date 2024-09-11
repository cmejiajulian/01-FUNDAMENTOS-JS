//FUNCIONES 


function saludar (){
    console.log('Hola Mundo');
}

saludar();

//FUNCION ANONIMA 

const saludar2 = function (){
    console.log('Hola Mundo Para ti ');
}

saludar2();

//FUNCION CON ARGUMENTO

function saludar3( nombre){
    console.log('Hola ' + nombre ) ;
   
}
saludar3('Julius');

//FUNCION CON ARGUMENTO COMO CONSTANTE

const saludar4 = function(nombre){
    console.log('Hola ' + nombre);
}

saludar4('Julian');

//FUNCION CON VARIABLE arguments PARA RECONOCER TODOS LOS DATOS QUE SE PONEN 

function saludar5(nombre){
    console.log(arguments)
    return 1;
    console.log('Sou un codigo que esta depues del return')// esto no se ejecutara 
    
}
saludar5 ('julian',false,40,'La Sultana');
const retornoSaludar5 = saludar5('julian',false,40,'La Sultana')
console.log({retornoSaludar5})

//FUNCION DE FLECHA 

const saludarFlecha = () => {
    console.log('Hola flecha');
}

saludarFlecha();

//FUNCION DE FLECHA  ARGUMENTO

const saludarFlecha2 = (nombre) =>{

    console.log('Mi nombre es: ', nombre)
}

saludarFlecha2('Julian');

//EJERCICIO 

function sumar (a,b){
    return a + b
}

console.log(sumar(4,3))
//
const sumar2 = (a,b)=> {
    return a*b;
}

console.log(sumar2(4,4));

//FUNCION DE FLECHA CON return RESUMIDO 

const divi = (a,b) => a/b;

console.log(divi(50,5));

//GET ALEATORIO

function getAleatorio (){
  
    return Math.random();
}

console.log(getAleatorio())
 
// GET ALEATORIO 2 RESUMIDO 

const getAleatorio2 = ()=> Math.random();

console.log(getAleatorio2())