/*
-Recuperiamo in delle variabili i nodi del form e di tutti gli input
-Evento submit con funzione dove andiamo a bloccare il refresh della pagina
    -Associamo i value dei vari nodi input dentro alle variabili

*/

//funzioni 

/**
 * ## Catturiamo i nodi di input
 * @returns restituiamo un array con i nodi
 */
function getInputNodes() {
    const nodes= {
    fullNameEl: document.getElementById('fullName'),
    distanceEl: document.getElementById('distance'),
    ageEl: document.getElementById('age'),
    btnSubmitEl: document.querySelector('button[type="submit"]'),
    }
    return nodes
}

/**
 * ## Catturiamo i valori dei nodi di input
 * @param {arr} arr - inseriamo l'array con i nodi di getInputNodes 
 * @returns restituisce array con i valori trovati
 */
function getInputValues(arr) {
    const values = {
    fullNameValue: arr.fullNameEl.value,
    distanceValue: parseInt(arr.distanceEl.value),
    ageValue: arr.ageEl.value
    }
    return values;
}
/**
 * ## Calcoliamo lo sconto in base all'età
 * @param {arr} ticket - Inserire L'array conentenenti le informazioni del ticket  
 * @returns restituisce un elemento arr con il moltiplicatore del valore al netto dello sconto, se 1 prezzo pieno, 0.8 equivale a 20% e 0.6 il 40% di sconto
 */
function calcDiscount(age) {
    let discount = 1;
    //calcola lo sconto da applicare
    if (age === 'Minorenne') {
        discount = 0.8;
    } else if (age === 'Over 65') {
        discount = 0.6;
    }
    return discount;
}

/**
 * ## calcoliamo il prezzo finale del biglietto
 * @param {number} val1 - Inserisci il valore della distanza da percorrere
 * @param {number} val2 - inserisci il valore dello scontro
 * @returns restituisce un elemento arr con il prezzo finalme calcolato
 */
function calcFinalPrice(val1, val2) {
    const arr = [];
    arr.finalPrice = (0.21 * val1 * val2);
    return arr.finalPrice;
}

//catturiamo il nodo del form
const formEl = document.querySelector('form');
//evento del form
formEl.addEventListener('submit', function (e) {
    //blocchiamo il refresh
    e.preventDefault();
    //catturiamo i nodi di input
    const inputNodes = getInputNodes();
    //catturiamo i valori dei nodi di input
    const ticket = getInputValues(inputNodes);
    //calcoliamo lo sconto in base all'età
    ticket.discount = calcDiscount(ticket.ageValue);
    //calcoliamo il prezzo finale del biglietto
    ticket.finalPrice = calcFinalPrice(ticket.discount, ticket.distanceValue)

    console.log(ticket);
})


//inserimento valori trovati in HTML
//recuperiamo i nodi dell'output
const passengerEl = document.querySelector('.passenger');
const promotionEl = document.querySelector('td:first-child');
const ticketPriceEl = document.querySelector('td:last-child')


