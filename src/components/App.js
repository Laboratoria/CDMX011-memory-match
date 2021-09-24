import  HarryPotter  from '../data/HarryPotter/HarryPotter.js';
import {shuffle} from '../components/Shuffle.js';
import {newGame} from './newGame.js';

const data = HarryPotter.items;
const cardsPair = data.concat(data);
let selectedOne = null; //guarda cartas cliqueadas
let selectedTwo = null; //guarda cartas que hicieron match
let memory = [];
let score = 0; //puntaje


export const App = () => {

  const imgDiv = document.createElement('div');
  imgDiv.className = 'App';
  const header = document.getElementById('header');
  header.append(newGame());
  const shuffleCard = shuffle(cardsPair);
  /*const audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sound/hp-music.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  imgDiv.appendChild(audioElement);*/

  shuffleCard.forEach(function(target){
    const targDiv = document.createElement('div');
    targDiv.className = 'targets';
    targDiv.dataset.id = target.id;
    const divFront = document.createElement ('div');
    divFront.className = 'divFront';
    const cardFront = document.createElement('img');
    cardFront.src=target.image;
    cardFront.className = 'front';
   const divBack = document.createElement ('div');
    divBack.className = 'divBack';
    const cardBack = document.createElement('img');
    cardBack.src= 'img/back-card.jpg';
    cardBack.className = 'back';


    divBack.append(cardBack)
    divFront.append(cardFront)

    targDiv.append(divBack)
    targDiv.append(divFront)

    imgDiv.append(targDiv)

    targDiv.addEventListener('click', (e) => {
      let element = e.currentTarget;
        if(element.className === "targets"){
         element.style.transform = "rotateY(180deg)";
         element.style.transition = "1s";
        }

            const id = e.currentTarget.dataset.id;

            if (selectedOne == null) {
              selectedOne = id;
              console.log(selectedOne)
            } else {selectedTwo = id}
            console.log(selectedTwo)
            if (selectedOne == selectedTwo){
             score +=100;
              alert ("Very good, you found the pair!");
              targDiv.style.backgroundColor = "white";
              console.log(score)
            }



    });


  })
  return imgDiv
}
