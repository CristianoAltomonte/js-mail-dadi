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

