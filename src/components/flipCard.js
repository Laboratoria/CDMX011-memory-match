import { card } from "./card"

function flipCard (){
    this.classList.toggle('flip')

}
card.forEach(card.addEventListener('click', flipCard))



// const flipCard = document.querySelector('.card')
// flipCard.addEventListener('click', function () {
//     flipCard.classList.toggle('is-flipped')
// });

// function flip(event){
//     let element = event.currentTarget;
//     if (element.className === "card") {
//     if(element.style.transform == "rotateY(180deg)") {
//       element.style.transform = "rotateY(0deg)";
//     }
//     else {
//       element.style.transform = "rotateY(180deg)";
//     }
//   }
// };
