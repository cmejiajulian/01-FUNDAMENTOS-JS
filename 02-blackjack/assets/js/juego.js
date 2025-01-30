(() => {
    'use strict';

    // Declaración de variables principales
    let deck = []; // Arreglo que almacena la baraja
    const tipos = ['C', 'D', 'H', 'S'], // Tipos de cartas: Corazones, Diamantes, Tréboles y Espadas
          especiales = ['A', 'J', 'Q', 'K']; // Cartas especiales

    let puntosJugadores = []; // Arreglo para almacenar los puntos de cada jugador

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosAcomulados = document.querySelectorAll('small');

    // ---------------------- FUNCIONES ----------------------

    /**
     * Inicializa el juego reiniciando variables y la interfaz.
     * @param {number} numJugadores - Cantidad de jugadores en el juego (incluyendo computadora).
     */
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(); // Crear una nueva baraja
        puntosJugadores = Array(numJugadores).fill(0); // Inicializar los puntos de cada jugador

        // Reiniciar puntajes y cartas en la interfaz
        puntosAcomulados.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        // Habilitar botones de juego
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };

    /**
     * Crea una nueva baraja de cartas y la baraja aleatoriamente.
     * @returns {Array} Baraja barajada.
     */
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck); // Baraja aleatoriamente usando Lodash
    };

    /**
     * Toma una carta de la baraja.
     * @returns {string} Carta seleccionada.
     */
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw new Error('No hay cartas en el deck');
        }
        return deck.pop();
    };

    /**
     * Obtiene el valor de una carta.
     * @param {string} carta - Carta de la baraja.
     * @returns {number} Valor de la carta.
     */
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor);
    };

    /**
     * Acumula los puntos del jugador/computadora.
     * @param {string} carta - Carta tomada.
     * @param {number} turno - Turno del jugador (0 es el primer jugador, el último es la computadora).
     * @returns {number} Puntos acumulados del jugador.
     */
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosAcomulados[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    /**
     * Crea y muestra una carta en la interfaz.
     * Comentario original: Esta parte crea la imagen de la carta y la agrega al contenedor correspondiente.
     * @param {string} carta - Carta a mostrar.
     * @param {number} turno - Turno del jugador.
     */
    const crearCarta = (carta, turno) => {
        const imagenCarta = document.createElement('img');
        imagenCarta.src = `cartas/cartas/${carta}.png`;
        imagenCarta.classList.add('carta');
        divCartasJugadores[turno].append(imagenCarta);
    };

    /**
     * Determina el ganador del juego.
     * Comentario original: Se establece la lógica para mostrar el ganador o empate.
     */
    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else {
                alert('Computadora gana');
            }
        }, 100);
    };

    /**
     * Turno de la computadora para jugar hasta superar al jugador o alcanzar el máximo permitido.
     * Comentario original: La computadora sigue pidiendo cartas hasta superar los puntos del jugador o llegar al límite.
     * @param {number} puntosMinimos - Puntos que la computadora debe superar.
     */
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = puntosJugadores[puntosJugadores.length - 1];
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    };

    // ---------------------- EVENTOS ----------------------

    /**
     * Evento: Botón "Pedir Carta"
     * Comentario original: Evalúa si el jugador perdió, ganó o sigue jugando.
     */
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('Ganaste');
            alert('GANASTE');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    });

    /**
     * Evento: Botón "Detener"
     * Comentario original: Permite pasar el turno a la computadora.
     */
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    /**
     * Evento: Botón "Nuevo Juego"
     * Comentario original: Reinicia el juego para empezar desde cero.
     */
    btnNuevo.addEventListener('click', () => {
        inicializarJuego(); // Reinicia el juego
    });

    // Retorno público para inicializar el juego externamente
    return {
        nuevoJuego: inicializarJuego
    };
})();

