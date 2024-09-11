
const regresaTrue = () =>{
    console.log('Regresa true');
    return true
}

const regresaFalse = () => {
    console.log('Regresa Falso');
    return false
}

console.warn( 'Not o la negacion')


// '!' negacion 
console.log(true);//true
console.log(!true)//false
console.log(!!!!!false)//true

console.log(!regresaFalse())//true


console.warn('and');//true si todos los valores son verdaderos
console.log(true&&true);//true
console.log(true&&!false);//true

console.log('======');

console.log(regresaFalse() && regresaTrue() )//false
console.log(regresaTrue () && regresaTrue() )//true
console.log(regresaTrue () && regresaFalse() )//false


console.log('======');

console.log('4 condiciones:', true && true && true && false);
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();


console.warn('OR') // false si todos los valores son falsos 
console.log('4 condiciones:', true || true || true || false);
console.log(true||false);
console.log(false||false);
console.log(false||true);

console.log( regresaTrue()|| regresaFalse());


//PRO TIP 

console.warn('Asignaciones');

const soyUndifined = undefined;
const soyNull = null;
const soyFalse= false;

const a1 = true && 'hola mundo' && 150; // ?
const a2 = 'Hola'&& 'Mundo'&& soyFalse;
const a3 = soyFalse || 'Ya no soy falso ';
const a4 = soyFalse || soyUndifined || 'ya no soy falso de nuevo';
const a5 = soyFalse || soyUndifined||regresaTrue()||'Ya no soy falso para ti'||true;
console.log({a1,a2,a3,a4,a5});


if (regresaFalse() && regresaTrue () && (true || false || true)){
    console.log('Hacer algo');

}else{
    console.log('Hacer otra cosa ');
}