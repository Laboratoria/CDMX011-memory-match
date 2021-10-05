import {shuffle} from './shuffle.js'

export const button = () => {
    const buttonShuffle = document.createElement('button');
    buttonShuffle.textContent = 'shuffle cards';
    buttonShuffle.setAttribute('id', 'shuffler');

    buttonShuffle.addEventListener('click', function(event){
        let shuffled = shuffle()
        let devsHtml = '';
        shuffled.forEach((eachDev) => {
            devsHtml += `<div class='container'>
            <div class='card'>
            <div class='frontcard'>
            <image src=${eachDev.image} height='65px' width='50px'/>
            <p>${eachDev.id}</p>
            </div>
            </div>`;
        });
        document.getElementById('root').innerHTML=(devsHtml)
    })
    return buttonShuffle;
}

