/*
-Recuperiamo in delle variabili i nodi del form e di tutti gli input
-Evento submit con funzione dove andiamo a bloccare il refresh della pagina
    -Associamo i value dei vari nodi input dentro alle variabili

*/

//recuperiamo i nodi del form
const formEl = document.querySelector('form');
const fullNameEl = document.getElementById('fullName');
const distanceEl = document.getElementById('distance');
const ageEl = document.getElementById('age');
const btnSubmitEl = document.querySelector('button[type="submit"]');
//array dove salviamo i value del form
const ticket = {
    fullNameValue: '',
    distanceValue: 0,
    ageValue: '',
    price: 0.21,
    discount: 1
}

//evento del form che cattura i value degli input
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    //recuperiamo nell'array i valori degli input 
    ticket.fullNameValue = fullNameEl.value;
    ticket.distanceValue = distanceEl.value;
    ticket.ageValue = ageEl.value;
    //calcola lo sconto da applicare
    if (ticket.ageValue === 'Minorenne') {
        ticket.discount = 0.8;
    } else if (ticket.ageValue === 'Over 65') {
        ticket.discount = 0.6;
    }
    //calcola il prezzo del biglietto
    ticket.price = (ticket.price * ticket.distanceValue * ticket.discount);
})
//debug
console.log(ticket);

//inserimento valori trovati in HTML
//recuperiamo i nodi dell'output
const passengerEl = document.querySelector('.passenger');
const promotionEl = document.querySelector('td:first-child');
const ticketPriceEl = document.querySelector('td:last-child')

//debug 
console.log(promotionEl, ticketPriceEl)


