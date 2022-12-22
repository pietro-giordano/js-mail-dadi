/*
1. genera numero casuale per pc
2. genera numero casuale per utente
3. confronta i valori
      3.1 se più grande pc vince pc
      3.2 se piu grande utente vince utente
      3.3 altrimenti è pareggio
4. fine
*/
alert('Benvenuto al gioco del dado');

const pcNumber = Math.floor(Math.random() * 6) +1;
console.log('Computer: ' + pcNumber);
alert('Computer tira dado ed esce ' + pcNumber);

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Utente: ' + userNumber);
alert('Utente tira dado ed esce ' + userNumber);

if (pcNumber > userNumber) {

      console.log('Computer vince');
      alert('Computer vince');

} else if (pcNumber < userNumber) {

      console.log('Utente vince');
      alert('Utente vince');

} else {

      console.log('Pareggio!!');
      alert('Pareggio!!');

}

alert('Per giocare di nuovo ricarica la pagina');