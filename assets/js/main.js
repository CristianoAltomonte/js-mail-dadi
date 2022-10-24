// ESERCIZIO MAIL 

// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const inputEmail = document.getElementById('inputEmail'); 

function iscriviti(){

    let valueEmail = inputEmail.value;
    let emails = ['provax@hotmail.it','provay@hotmail.it','provaz@hotmail.it'];

    let emaildone = false;

    for(let i = 0; i < emails.length; i++){
        if (emails[i] == valueEmail){
            emaildone = true;
        }
    }

    if (emaildone == true){
        document.getElementById('utente').innerHTML="Utente registrato"
    }
    else{
        document.getElementById('utente').innerHTML="Utente non registrato"
    }

}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

let vittoriaplayer = 0;
let vittoriacomputer = 0;

let player = document.getElementById("player");
let computer = document.getElementById("computer");


function TiraDado(){
    
    let risultato = document.getElementById('risultato');
    let randomplayer = Math.floor(Math.random() * 6 + 1);
    let randomcomputer = Math.floor(Math.random() * 6 + 1);
    
    if (randomplayer > randomcomputer) {
        risultato.innerHTML = `Hai vinto! il tuo numero è ${randomplayer}`;
        vittoriaplayer = vittoriaplayer + 1;

    } else if (randomplayer == randomcomputer) {
        risultato.innerHTML = `Pareggio! ${randomplayer} e ${randomcomputer}! `;

    } else {
        risultato.innerHTML = `Hai perso ho fatto ${randomcomputer}, Rigiochiamo?`;
        vittoriacomputer = vittoriacomputer + 1;
    }

    player.innerHTML = `Vittoria Player: ${vittoriaplayer}`;
    computer.innerHTML = `Vittoria Computet: ${vittoriacomputer}`;

}