import card from "./card.js";
import data from '../data/webdev/webdev.js';

const gameBoard = () => {
    const webDevs = data.items.concat(data.items);

    const board = document.createElement('div');
    board.className = 'gameBoard';

    let elementSelected = []
    function flipCard(event){
        elementSelected = event.currentTarget
        // let id = event.currentTarget.dataset.id
        // elementSelected.push(id)
        console.log(elementSelected)
        elementSelected.classList.toggle('backcard');
     }

    // function match(){

    // }

    webDevs.forEach((eachCard) => board.appendChild(card(eachCard, flipCard)));
        // const cardEl = card.a(eachCard)
        // board.appendChild(cardEl)
    
    return board;
}
export default gameBoard;



