export const Carta = (pokemon) => {
    const cartaPokemon = document.createElement('div');
    const imgPokemon = document.createElement('img');
    const cartaFrente = document.createElement('div');
    //Esta es la imágen que fue creada para lo de atrás
    const cartaAtras = document.createElement('div');
    const imagenAtras = document.createElement('img');
    imagenAtras.src = "assets/cartaRevesPoke.png";
    imgPokemon.src = pokemon.image;
    cartaPokemon.className = "carta";
    cartaFrente.className = "cara";
    cartaAtras.className = "detras";
   
   cartaFrente.appendChild(imgPokemon);
   cartaAtras.appendChild(imagenAtras);
   cartaPokemon.appendChild(cartaFrente);
   cartaPokemon.appendChild(cartaAtras);

   return cartaPokemon
   
  }


