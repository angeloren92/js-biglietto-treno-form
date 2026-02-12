/*
-Recuperiamo in delle variabili i nodi del form e di tutti gli input
-Evento submit con funzione dove andiamo a bloccare il refresh della pagina
    -Associamo i value dei vari nodi input dentro alle variabili

*/

//recuperiamo i nodi
const formEl = document.querySelector('form');
const fullNameEl = document.getElementById('fullName');
const distanceEl = document.getElementById('distance');
const ageEl = document.getElementById('age');
const btnSubmitEl = document.querySelector('button[type="submit"]');
//array dove salviamo i value del form
const ticket = {
    fullNameValue: '',
    distanceValue: 0,
    ageValue: ''
}
//evento del form che cattura i value degli input
formEl.addEventListener('submit', function(e){
    e.preventDefault();
    ticket.fullNameValue = fullNameEl.value;
    ticket.distanceValue = distanceEl.value;
    ticket.ageValue = ageEl.value;
})


