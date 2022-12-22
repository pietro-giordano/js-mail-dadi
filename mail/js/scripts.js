/*
1. chiedi all'utente la sua mail
2. verifica se email è presente in un array di email
      2.1 se presente dai risposta affermativa
      3.1 se non presente dai risposta negativa 
*/

const emailList = ['spiderman@gmail.com', 'thor@gmail.com', 'batman@gmail.com', 'superman@gmail.com'];
const userEmail = prompt('Inserisci email');
console.log('Email inserita: ' + userEmail);

// if (emailList.includes(userEmail, 0) == true) {

//       console.log('Mail presente');
//       alert('La mail inserita è presente nel nostro database');

// } else {

//       console.log('Email errata o non valida');
//       alert('La mail inserita è errata o non valida');

// }

for (let i = 0; i < emailList.length; i++) {

      if (emailList[i] == userEmail) {

            console.log('Email presente');
            alert('Email presente');
            break;

      } else if (i == emailList.length - 1) {

            console.log('Email errata o non valida');
            alert('La mail inserita è errata o non valida');

      }

}