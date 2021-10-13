const topBar = () => { 
const bar = document.createElement('div');
    bar.className = 'topBar'

    const img1 = document.createElement('img');
    img1.src = './imagenes/rojo.png';
    img1.className = 'img1';
    const img2 = document.createElement('img');
    img2.src = './imagenes/amarillo.webp';
    img2.className = 'img2';
    const img3 = document.createElement('img');
    img3.src = './imagenes/verde.png';
    img3.className = 'img3';

    bar.append(img1, img2, img3)

    return bar
}
export default topBar