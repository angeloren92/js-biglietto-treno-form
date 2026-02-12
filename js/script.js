/*
-Recuperiamo in delle variabili i nodi del form e di tutti gli input
-Evento submit con funzione dove andiamo a bloccare il refresh della pagina
    -Associamo i value dei vari nodi input dentro alle variabili

*/

//funzioni 

//recupero nodi degli input
function getInputNodes() {
    const nodes= {
    fullNameEl: document.getElementById('fullName'),
    distanceEl: document.getElementById('distance'),
    ageEl: document.getElementById('age'),
    btnSubmitEl: document.querySelector('button[type="submit"]'),
    }
    return nodes
}

//recuperiamo nell'array i valori degli input 
function getInputValues(arr) {
    const values = {
    fullNameValue: arr.fullNameEl.value,
    distanceValue: arr.distanceEl.value,
    ageValue: arr.ageEl.value
    }
    return values;
}
/**
 * ## Calcolo sconto del biglietto
 * @param {arr} ticket - Inserire L'array conentenenti le informazioni del ticket  
 * @returns restituisce arr con il moltiplicatore del valore al netto dello sconto, se 1 prezzo pieno, 0.8 equivale a 20% e 0.6 il 40% di sconto
 */
function calcDiscount(ticket) {
    ticket.discount = 1;
    //calcola lo sconto da applicare
    if (ticket.ageValue === 'Minorenne') {
        ticket.discount = 0.8;
    } else if (ticket.ageValue === 'Over 65') {
        ticket.discount = 0.6;
    }
    console.log(ticket)
    return ticket;
}

function calcFinalPrice() {
    ticket.price = (ticket.price * ticket.distanceValue * ticket.discount);
}


const formEl = document.querySelector('form');
//evento del form che cattura i value degli input
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNodes = getInputNodes();
    const ticket = getInputValues(inputNodes);
    ticket.price = 0.21;
    calcDiscount(ticket);

   
})

//inserimento valori trovati in HTML
//recuperiamo i nodi dell'output
const passengerEl = document.querySelector('.passenger');
const promotionEl = document.querySelector('td:first-child');
const ticketPriceEl = document.querySelector('td:last-child')


