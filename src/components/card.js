const card = (eachCard) => {
    const cardelement = document.createElement('div');
    cardelement.className = 'card';
    cardelement.addEventListener('click')

    const frontcard = document.createElement('div');
    frontcard.className = 'frontcard';

    const backcard = document.createElement('div');
    backcard.className = 'backcard';

    const frontp = document.createElement('p');
    frontp.textContent = 'hey! guess the dev';

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








