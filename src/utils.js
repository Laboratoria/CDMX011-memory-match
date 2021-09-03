//duplicar data 
export const duplicateData = (data) =>{
  const duplicate = data.concat(data)
  return duplicate
}

export function suffle(pokemonData) {
  //Aleatorio
  for (let i = 0; i < (pokemonData.length) - 1; i++) {
    //Número aleatorio
    const number = Math.floor(Math.random() * (pokemonData.length - i)) + i;
    //intercambio de posición
    const position = pokemonData[i];
    const random = pokemonData[number];

    pokemonData[number] = position;
    pokemonData[i] = random;
  }
  return pokemonData;
}



//mostrar imagenes
const carta= (card) => {
  const cards = document.createElement("div")
  cards.setAttribute("id","cards")
  //cards.id="cards"
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src= card.image;
  cards.appendChild(imagenPokemon) 
  const nombre = document.createElement("h3")
  nombre.textContent = card.id
  cards.appendChild(nombre)
 
 
//cards.insertBefore(imagenPokemon, text)
  return cards
};

//Separar cada imagen 
export const cardContainer = (data) => {
  const container = document.createElement("div")
  container.id = "cardsContainer"
    data.forEach(function(card){
    container.appendChild(carta(card))
  });
  // eslint-disable-next-line no-console
  //console.log(container)
  return container
}

//Crear Boton Aleatorio
export const button =()=>{
  const containerButton = document.createElement("div");
  containerButton.id="divButton"
  const button= document.createElement("button")
  button.id= "button"
  button.textContent ="Play"
  containerButton.appendChild(button)
  button.addEventListener("click", function(){
    const container= document.getElementById("cardsContainer")
    const cards = document.getElementById("cards")
    const revolverData = suffle(cards)
    container.appendChild(revolverData)  
    
  }) 

  return containerButton
} 

//Seleccionar Dos cartas iguales
//checkIfPair(card1, card2) {
  // ... write your code here
//}



 
//document.getElementById(button).addEventListener("click", function(revolver))


  /* export function mostrarTarjetas(data) {
  
  const container= []
    data.forEach((item) => {
     
        const card = document.createElement("div");
        card.setAttribute("id", "cards");

        const imagen = document.createElement("img");
        imagen.src = item.image;
        card.appendChild(imagen);

        const name = document.createElement("h3");
        name.textContent = item.id;
        card.appendChild(name);
        container.push(card)
        
    })
      
  return container
} */
