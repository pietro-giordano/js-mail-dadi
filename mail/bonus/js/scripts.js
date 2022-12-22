/*
1. chiedi all'utente la sua mail
2. verifica se email è presente in un array di email
      2.1 se presente dai risposta affermativa
      3.1 se non presente dai risposta negativa 
*/

const emailList = ['spiderman@gmail.com', 'thor@gmail.com', 'batman@gmail.com', 'superman@gmail.com'];
const userEmail = document.getElementById('mail');

const button = document.getElementById('clickMe');
const answer = document.getElementById('answer');

button.addEventListener ('click',

      function() {

            console.log('Email inserita: ' + userEmail.value);

            for (let i = 0; i < emailList.length; i++) {

                  if (emailList[i] == userEmail.value) {

                        console.log('Email presente');
                        answer.innerHTML = 'Email presente';
                        break;

                  } else if (i == emailList.length - 1) {

                        console.log('Email errata o non valida');
                        answer.innerHTML = 'La mail inserita è errata o non valida';

                  }

            }

      }

)


