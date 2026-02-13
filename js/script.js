/*

*/

//FUNZIONI
/**
 * ## Catturiamo i nodi di input
 * @returns restituiamo un array con i nodi
 */
function getInputNodes() {
    const nodes = {
        fullNameEl: document.getElementById('fullName'),
        distanceEl: document.getElementById('distance'),
        ageEl: document.getElementById('age')
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
        ageValue: arr.ageEl.value;
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
    let finalPrice = (0.21 * val1 * val2);
    finalPrice = finalPrice.toFixed(2);
    return finalPrice;
}
 /** ## Catturiamo gli output nodes
 * @returns restituisce array con i nodi
 */
function getOutputNodes() {
    const outputNodes = {
        passengerEl: document.querySelector('.passenger'),
        promotionEl: document.querySelector('td:first-child'),
        ticketPriceEl: document.querySelector('td:last-child'),
        carriageEl: document.querySelector('td:nth-child(2)'),
        cpCodeEl: document.querySelector('td:nth-child(3)')
    }
    return outputNodes;
}
/**
 * ## Inseriamo gli elementi in HTML
 * @param {arr} arr1 - Inserisci array contenente valori per il biglietto
 * @param {arr} arr2 - Inserisci array contenente nodi output
 */
function logTicket(arr1, arr2) {
    arr2.passengerEl.innerHTML = arr1.fullNameValue;
    arr2.carriageEl.innerHTML = arr1.carriageNumber;
    arr2.cpCodeEl.innerHTML = arr1.cpNumber;
    arr2.ticketPriceEl.innerHTML = `${arr1.finalPrice} €`;
    let text = 'Biglietto Standard';
    if (arr1.discount === 0.8) {
        text = 'Biglietto Junior';
    } else if (arr1.discount === 0.6) {
        text = 'Biglietto Senior';
    }
    arr2.promotionEl.innerHTML = text;
}

//catturiamo il nodo del form
const formEl = document.getElementById('mainForm');
//evento del form
formEl.addEventListener('submit', function (e) {
    //blocchiamo il refresh
    e.preventDefault();
    //catturiamo il node del col dove sta il biglietto e lo facciamo comparire
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.classList.replace('d-none', 'd-block');
    //catturiamo i nodi di input
    const inputNodes = getInputNodes();
    //catturiamo i valori dei nodi di input
    const ticket = getInputValues(inputNodes);
    //calcoliamo lo sconto in base all'età
    ticket.discount = calcDiscount(ticket.ageValue);
    //calcoliamo il prezzo finale del biglietto
    ticket.finalPrice = calcFinalPrice(ticket.discount, ticket.distanceValue);
    //catturiamo gli output nodes
    const outputNodes = getOutputNodes();
    //generiamo un numero di carrozza
    const getCarriageNumber = () => (Math.floor(Math.random() * 18) + 1);
    //generiamo un numero CP
    const getCpNumber = () => (Math.floor(Math.random() * 100000) +100000);
    //aggiungiamo gli elementi nell'array ticket
    ticket.carriageNumber = getCarriageNumber();
    ticket.cpNumber = getCpNumber();
    //inseriamo gli elementi in HTML
    logTicket(ticket, outputNodes);
})





