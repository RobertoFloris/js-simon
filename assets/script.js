const arrayRandom = [];

riempiArray(arrayRandom)

console.log(arrayRandom)

const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");

n1.innerText = arrayRandom[0];
n2.innerText = arrayRandom[1]
n3.innerText = arrayRandom[2]
n4.innerText = arrayRandom[3]
n5.innerText = arrayRandom[4]

const countReverse = document.querySelector('.countReverse');
let seconds = 10;

countReverse.innerHTML = seconds--;

const intervalId = setInterval( () =>{

  countReverse.innerHTML = seconds;
  if(seconds === 0){
    clearInterval(intervalId);
    countReverse.innerHTML = 'Il tempo è terminato!';
  }
  seconds--;

},1000)





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