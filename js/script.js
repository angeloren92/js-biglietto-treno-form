/*
-Recuperiamo in delle variabili i nodi del form e di tutti gli input
-Evento submit con funzione dove andiamo a bloccare il refresh della pagina
    -Associamo i value dei vari nodi input dentro alle 

*/

//recuperiamo i nodi
const form = document.querySelector('form');
const fullName = document.getElementById('fullName');
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const btnSubmit = document.querySelector('button[type="submit"]');
//debug
console.log(form, fullName, distance, age, btnSubmit)
//

