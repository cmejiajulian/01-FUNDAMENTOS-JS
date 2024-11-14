/**
 * 2C=two of clubs(treboles)
 * 2D=two of Diaminds(treboles)
 * 2C=two of Herts(treboles)
 * 2C=two of spades(treboles)
 * 
 */


let deck = []
const tipos =['C','D','H','S']
const especiales = ['A','J','Q','K']

const creardeck = ()=>{

    for (let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    
    }
    for (let tipo of tipos){
        for(esp of especiales){
            deck.push(esp+tipo);
        }
    }
    console.log(deck)
}
creardeck();