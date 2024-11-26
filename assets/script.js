//inizializzo due array vuoti
const arrayRandom = [];
const arrayUtente = []

//richiamo la funzione che inserisce numeri univoci nell'array
riempiArray(arrayRandom)

// seleziono gli span in cui dovranno apparire prima i numeri dell'array random e poi gli input
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");

// faccio apparire l'array random
n1.innerText = arrayRandom[0];
n2.innerText = arrayRandom[1];
n3.innerText = arrayRandom[2];
n4.innerText = arrayRandom[3];
n5.innerText = arrayRandom[4];

// seleziono tutti gli altri elementi che potranno servirmi
const onTime = document.querySelector(".on-time");
const timeExpired = document.querySelector(".time-expired")
const send = document.querySelector(".send")
const textSuccess = document.querySelector(".text-success");
const textDanger = document.querySelector(".text-danger");
const countdown = document.querySelector('.countdown');

//il timer partirà da 10
let seconds = 10;

//faccio apparire 10 e lo decremento a 9
countdown.innerHTML = seconds--;

const intervalId = setInterval(() => {

  //faccio apparire 9
  countdown.innerHTML = seconds;

  //logica per quando il timer arriverà a 0
  if (seconds === 0) {
    //interrompo il conto alla rovescia quando arrivo a 0
    clearInterval(intervalId);

    //cambio il layout
    countdown.innerHTML = 'Il tempo è terminato!';
    onTime.classList.add("d-none");
    timeExpired.classList.remove("d-none");

    //gli input sostituiscono il numero dell'array random in modo tale da non rendere possibile imbrogliare guardando con l'ispector gli elementi nascosti
    n1.innerHTML = `<input type="number" min="1" max="50" class="n1" required style="width: 50px">`;
    n2.innerHTML = `<input type="number" min="1" max="50" class="n2" required style="width: 50px;">`;
    n3.innerHTML = `<input type="number" min="1" max="50" class="n3" required style="width: 50px;">`;
    n4.innerHTML = `<input type="number" min="1" max="50" class="n4" required style="width: 50px;">`;
    n5.innerHTML = `<input type="number" min="1" max="50" class="n5" required style="width: 50px;">`;

    //appare il pulsante invia
    const send = document.querySelector('.send');
    send.classList.remove('d-none');

    //salvo gli elementi inseriti negli input nell'arrayUtente 
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

        //(.n1 input) perché input è figlio dello span con classe n1 etc
        arrayUtente.push(parseInt(document.querySelector('.n1 input').value));
        arrayUtente.push(parseInt(document.querySelector('.n2 input').value));
        arrayUtente.push(parseInt(document.querySelector('.n3 input').value));
        arrayUtente.push(parseInt(document.querySelector('.n4 input').value));
        arrayUtente.push(parseInt(document.querySelector('.n5 input').value));

      //caricato l'array, il pulsante invia sparisce
      send.classList.add('d-none');


      //logica per far apparire l'esito della partita
      let count=0;
      for(let i=0; i<arrayUtente.length; i++){
        if(arrayRandom.includes(arrayUtente[i])){
          count++;
        }
      }

      if(count==1){
        textSuccess.innerText = `Hai vinto! Ti sei ricordato ${count} numero`;
        textSuccess.classList.remove("d-none");
      } else if(count>0){
        textSuccess.innerText = `Hai vinto! Ti sei ricordato ${count} numeri`;
        textSuccess.classList.remove("d-none");
      } else {
        textDanger.innerText = "Hai perso";
        textDanger.classList.remove("d-none");
      }


    });
  }

  // decremento la variabile del conto alla rovescia
  seconds--;
}, 1000); //1000 ms quindi ogni secondo si abbassa di uno






//funzione array random
function riempiArray(array){
  //inizializzo il primo numero
  let check = Math.floor(Math.random() * 50) + 1;

  //ciclo 5 volte
  for (let i = 0; i<5; i++){

    //per 5 (o più) volte sovrascrivo la variabile e la pusho solo se effetivamente il numero appena selezionato in modo random è univoco
    while(array.includes(check)){
      check = Math.floor(Math.random() * 50) + 1;
    }
    array.push(check);
  }
}