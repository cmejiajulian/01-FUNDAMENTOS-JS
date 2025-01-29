let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;


// referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
console.log(btnPedir);

const btnDetener = document.querySelector('#btnDetener'); 

const btnNuevo = document.querySelector('#btnNuevo');

const puntosAcomulados = document.querySelectorAll('small');

const jugadorCartas = document.querySelector('#jugador-cartas');

const jugadorComputadora  = document.querySelector('#computadora-cartas')

// esta función crea una nueva baraja o deck
const creardeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck); // Asumiendo que usas lodash para barajar
    console.log(deck);
    return deck;
}
creardeck();

// esta función permite tomar una carta de la baraja
const pedirCarta = () => {
    if (deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}

// Función para calcular el valor de la carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
}

//Turno de la computadora
 

const turnoComputadora = (puntosMinimos) => {

    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosAcomulados[1].innerText = puntosComputadora;
     
        //<img class="carta" src="cartas/cartas/10C.png" alt="">
     
        const imagenCarta = document.createElement('img');
        imagenCarta.src =`cartas/cartas/${carta}.png`;
        imagenCarta.classList.add('carta');
        jugadorComputadora.append(imagenCarta);

        if(puntosMinimos>21){
            break;
        }

    }while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));


    setTimeout(() => {

        if(puntosComputadora=== puntosMinimos){
            alert('Nadie gana');
        } else if(puntosMinimos>21){
            alert('computadora gana');
        }else if (puntosComputadora>21){
            alert('Jugador Gana');
        }else{
            alert('Computadora Gana')
        }
        
    }, 10);
};



// Llamada a la función
const carta = pedirCarta();
const valor = valorCarta(carta);
console.log({ valor });


//Eventos 

btnPedir.addEventListener('click',()=>{
   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta(carta);
   puntosAcomulados[0].innerText = puntosJugador;

   //<img class="carta" src="cartas/cartas/10C.png" alt="">

   const imagenCarta = document.createElement('img');
   imagenCarta.src =`cartas/cartas/${carta}.png`;
   imagenCarta.classList.add('carta');
   jugadorCartas.append(imagenCarta);

   if(puntosJugador>21){
     console.warn('Perdiste');
     btnPedir.disabled = true;
     btnDetener.disabled=true;
     turnoComputadora(puntosJugador);
   }
   else if(puntosJugador===21){
    console.warn('Ganaste');
    btnPedir.disabled = true;
    btnDetener.disabled=true;
   }
   
});

btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador);

})


btnNuevo.addEventListener('click', () => {
    console.clear(); // Limpiar consola para un nuevo inicio

    deck = []; // Vaciar la baraja
    creardeck(); // Crear una nueva baraja

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosAcomulados[0].innerText = 0;
    puntosAcomulados[1].innerText = 0;

    jugadorCartas.innerHTML = ''; // Limpiar las cartas del jugador
    jugadorComputadora.innerHTML = ''; // Limpiar las cartas de la computadora

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
