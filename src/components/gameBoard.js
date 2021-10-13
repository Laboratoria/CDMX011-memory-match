import data from '../data/webdev/webdev.js';
import card from "./card.js";

const webDevs = data.items.concat(data.items);

const gameBoard = () => {
    const board = document.createElement('div');
    board.className = 'board';

    let elementsSelected = []
    let matches = 0;

    function flipCard(event) {
        let elementSelected = event.currentTarget;
        if (elementSelected.classList.contains('backcard')) return
        if (elementsSelected.length === 2) return
        
        elementsSelected.push(elementSelected);
        elementSelected.classList.toggle('backcard');
        
        if (elementsSelected.length === 2) {
            if(elementsSelected[0].dataset.id === elementsSelected[1].dataset.id){
                elementsSelected[0].classList.add('card-disabled');
                elementsSelected[1].classList.add('card-disabled');
                elementsSelected = [];
                matches++ 
            if(matches == data.items.length) {
                    alert('you won, congrats!')
                }                 
            } else { 
                setTimeout(() => {
                    elementsSelected[0].classList.toggle('frontcard');
                    elementsSelected[1].classList.toggle('frontcard');
                    elementsSelected = [];
                }, 900);
            }
        } 
    }
    webDevs.forEach((eachCard) => board.appendChild(card(eachCard, flipCard)));

    return board;
}
export default gameBoard;


