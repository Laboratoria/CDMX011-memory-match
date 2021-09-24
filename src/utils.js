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

/* export function suffle (data) {
  data.map(function (data, i) {
    const random= Math.floor(Math.random() * (data.length - i)) + i;
    let temp = data[i];
   data[i] = data[random];
   data[random] = temp;
  })
  return data;
} 
 */




//Seleccionar Dos cartas iguales
//checkIfPair(card1, card2) {
  // ... write your code here
//}
// Función para encontrar el par de la carta
/* export function match(card1, card2) {
  if(card1[0] =(card1[1]) {
    paresEncontrados = paresEncontrados + 1;
    for (let i= (card1.length - 1; i > -1; i--) {
      card2[i.style.visibility = "hidden";
    }
    
  }(card1.length = 0); // permite escoger más de 1 par
} */


 
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
