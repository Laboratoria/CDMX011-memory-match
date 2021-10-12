const card = (eachCard, flipCard) => {
    const cardelement = document.createElement('div');
    cardelement.className = 'card';
    cardelement.dataset.id = eachCard.id;
    cardelement.addEventListener('click', flipCard)


    const frontcard = document.createElement('div');
    frontcard.className = 'frontcard';

    const backcard = document.createElement('div');
    backcard.className = 'backcard';

    const frontp = document.createElement('p');
    frontp.textContent = 'cdfef';

    const backp = document.createElement('p');
    backp.textContent = eachCard.id

    const img = document.createElement('img');
    img.src = eachCard.image
    img.height = 60;
    img.width = 50;

    frontcard.appendChild(frontp);
    backcard.append(img, backp);

    cardelement.append(frontcard, backcard)

    return cardelement;
}
export default card;








