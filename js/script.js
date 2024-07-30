/*
    1. Recuperiamo l'elemento di interesse dal DOM
    2. Prepariamo le variabili per i dati dell'utente
    3. Chiediamo i dati all'utente (tramite prompt)
    4. Creiamo la password unendo i dati e aggiungendo un numero
    5. Inseriamo il risultato nell'elemento del DOM
*/

// #: Fase preparatoria
// Recuperiamo l'elemento dove mostreremo la password
const passwordElement = document.getElementById('password');
console.log(passwordElement);

// #: Fase raccolta dati
// Chiediamo i dati all'utente
const userName = prompt('Qual è il tuo nome?', 'Jonathan');
console.log(userName);

const userSurname = prompt('Qual è il tuo cognome?', 'Ultini');
console.log(userSurname);

const userFavColor = prompt('Qual è il tuo colore preferito?', 'Black-Gold');
console.log(userFavColor);

// #: Fase di elaborazione
// Creiamo la password unendo i dati e aggiungendo un numero
const generatedPassword = `${userName}${userSurname}${userFavColor}21`;
console.log(generatedPassword);

// #: Fase di Output
// Inseriamo la password generata nell'elemento del DOM
passwordElement.textContent = generatedPassword;
