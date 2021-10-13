const card = (eachCard, flipCard) => {
    const cardelement = document.createElement('div');
    cardelement.className = 'card';
    cardelement.dataset.id = eachCard.id;
    cardelement.addEventListener('click', flipCard)

    const frontcard = document.createElement('div');
    frontcard.className = 'frontcard';

    const backcard = document.createElement('div');
    backcard.className = 'backcard';

    const frontimage = document.createElement('img');
    // frontimage.src = './imagenes/question-mark.png';
    frontimage.className = 'frontImg';

    const backp = document.createElement('p');
    backp.textContent = eachCard.id

    const img = document.createElement('img');
    img.src = eachCard.image
    img.height = 58;
    img.width = 58;

    frontcard.appendChild(frontimage);
    backcard.append(img, backp);

    cardelement.append(frontcard, backcard)

    return cardelement;
}
export default card;








