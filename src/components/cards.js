//mostrar imagenes
let firstSelection = 0
let secondSelection = 0


const carta = (card) => {
  const cardContent = document.createElement("div")
  cardContent.setAttribute("class", "cardContent")
  cardContent.dataset.id = card.id
  const frontCard = document.createElement("div")
  frontCard.className = "frontCard"
  //frontCard.dataset.id=cardContent.id
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src = card.image;
  const name = document.createElement("h3")
  name.textContent = card.id
  frontCard.appendChild(imagenPokemon)
  frontCard.appendChild(name)
  const backCard = document.createElement("div")
  backCard.className = "backCard"
  const imagenBack = document.createElement("img")
  imagenBack.className = "imagenBack"
  imagenBack.src = "pokebola.png"

  backCard.appendChild(imagenBack)
  cardContent.appendChild(frontCard)
  cardContent.appendChild(backCard)
  //console.log("id", card)



  cardContent.addEventListener("click", (e) => {
    const clicked = e.currentTarget
    console.log(clicked)
    if (clicked.classList.contains("cardContent")) {
      clicked.classList.add("cardShow")
    }

    if (firstSelection === 0) {
      firstSelection = e.currentTarget.dataset.id
    } else {
      secondSelection = e.currentTarget.dataset.id
      if (firstSelection === secondSelection) {
        console.log("iguales")
      } else {
      
        console.log("no iguales")

      }
      firstSelection = 0
      secondSelection = 0

    }





  })
  return cardContent
};



//Separar cada imagen 
export const cardContainer = (data) => {
  const container = document.createElement("div")
  container.className = "cardsContainer"
  data.forEach(function (card) {
    container.appendChild(carta(card))

  })

  // eslint-disable-next-line no-console
  //console.log(container)
  return container
}

//Funciona 

/*   const carta= (card) => {
    const cardContent = document.createElement("div")
    cardContent.setAttribute("class","cardContent")
   
    const frontCard = document.createElement("div")
    frontCard.className= "frontCard"
    //frontCard.dataset.id=cardContent.id
    const imagenPokemon = document.createElement("img")
    imagenPokemon.src= card.image;
    const name = document.createElement("h3")
    name.textContent = card.id
    frontCard.appendChild(imagenPokemon)
    frontCard.appendChild(name)
    const backCard = document.createElement("div")
    backCard.className= "backCard"
    const imagenBack= document.createElement("img")
    imagenBack.className ="imagenBack"
    imagenBack.src= "pokebola.png"
    const contenedor = document.createElement("div")
    contenedor.className = "contenedor"
    contenedor.dataset.id = card.id
    console.log("id", card)
    backCard.appendChild(imagenBack)
    contenedor.appendChild(frontCard)
    contenedor.appendChild(backCard) 
    cardContent.appendChild(contenedor)
   
 console.log("id", card)
    let firstSelection = null
    let secondSelection = null
   const setCardsSelected = () => {
     console.log("first",firstSelection)
     console.log("second",secondSelection)
   }
    cardContent.addEventListener("click",(e)=>{
      const clicked = e.target
 console.log(clicked)
      if(clicked.parentElement.classList.contains("contenedor")){
        clicked.parentElement.classList.add("cardShow")
   if (firstSelection !== null){
     firstSelection= clicked.parentElement.dataset.id;
   }else{
     secondSelection = clicked.parentElement.dataset.id
     setCardsSelected()

   }
  }

      }) */

//Se voltean con currentTarget
/* const carta = (card) => {
  const cardContent = document.createElement("div")
  cardContent.setAttribute("class", "cardContent")
  cardContent.dataset.id = card.id
  //console.log("id", card)

  const frontCard = document.createElement("div")
  frontCard.className = "frontCard"
  //frontCard.dataset.id=cardContent.id
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src = card.image;
  const name = document.createElement("h3")
  name.textContent = card.id
  frontCard.appendChild(imagenPokemon)
  frontCard.appendChild(name)
  const backCard = document.createElement("div")
  backCard.className = "backCard"
  const imagenBack = document.createElement("img")
  imagenBack.className = "imagenBack"
  imagenBack.src = "pokebola.png"

  backCard.appendChild(imagenBack)
  cardContent.appendChild(frontCard)
  cardContent.appendChild(backCard)



  let firstSelection = 0
  let secondSelection = 0
  const setCardsSelected = () => {
    if (firstSelection === secondSelection) {
      console.log("iguales")
    } else {
      console.log("noiguales")
    }
    console.log("first", firstSelection)
    console.log("second", secondSelection)
    firstSelection = 0
    secondSelection = 0
  }
  cardContent.addEventListener("click", (e) => {
    const clicked = e.currentTarget
    console.log(clicked)
    if (clicked.closest(".cardContent")) {
      clicked.classList.add("cardShow")
    }
    if (firstSelection === 0) {
      firstSelection = e.currentTarget.dataset.id
    } else {
      secondSelection = e.currentTarget.dataset.id
    }
    setCardsSelected()

  })
   */


//ya se voltean

/* const carta= (card) => {
  const cardContent = document.createElement("div")
  cardContent.setAttribute("class","cardContent")
 cardContent.dataset.id= card.id
  const frontCard = document.createElement("div")
  frontCard.className= "frontCard"
  //frontCard.dataset.id=cardContent.id
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src= card.image;
  const name = document.createElement("h3")
  name.textContent = card.id
  frontCard.appendChild(imagenPokemon)
  frontCard.appendChild(name)
  const backCard = document.createElement("div")
  backCard.className = "backCard"
  backCard.dataset.id= card.id
  const imagenBack= document.createElement("img")
  imagenBack.className ="imagenBack"
  imagenBack.src= "pokebola.png"
  console.log("id", card)
  backCard.appendChild(imagenBack)
  cardContent.appendChild(frontCard)
  cardContent.appendChild(backCard) 
  
console.log("id", card)
let firstSelection;
let secondSelection; 
const setCardsSelected = () => {
 console.log("first",firstSelection)
 console.log("second",secondSelection)
}
cardContent.addEventListener("click",(e)=>{
const clicked = e.currentTarget
console.log(clicked)
if(clicked.className === "cardContent"){
  clicked.classList.add("cardShow")
}
  const id = e.currentTarget.dataset.id
  if(firstSelection !== 0){
    secondSelection = id
  
  if (firstSelection === secondSelection){
    alert("iguales")
   }
    firstSelection = 0
    secondSelection = 0
 }
  else{
   firstSelection = id
   setCardsSelected()

  }
}) */

//Se voltean con target
/*  const carta= (card) => {
  const cardContent = document.createElement("div")
  cardContent.setAttribute("class","cardContent")
 //cardContent.dataset.id= card.id
  const frontCard = document.createElement("div")
  frontCard.className= "frontCard"
  //frontCard.dataset.id=cardContent.id
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src= card.image;
  const name = document.createElement("h3")
  name.textContent = card.id
  frontCard.appendChild(imagenPokemon)
  frontCard.appendChild(name)
  const backCard = document.createElement("div")
  backCard.className = "backCard"
 backCard.dataset.id=card.id
  const imagenBack= document.createElement("img")
  imagenBack.className ="imagenBack"
  imagenBack.src= "pokebola.png"
  backCard.appendChild(imagenBack)
  cardContent.appendChild(frontCard)
  cardContent.appendChild(backCard) 
  
console.log("id", card)
let firstSelection =0
let secondSelection =0
const setCardsSelected = () => {
 console.log("first",firstSelection)
 console.log("second",secondSelection)
}
cardContent.addEventListener("click",(e)=>{
const clicked = e.target
console.log(clicked)
if(clicked.closest(".cardContent")){
  clicked.classList.add("cardShow")
}
  if(firstSelection !== 0){
    secondSelection = e.target.dataset.id
  
  if (firstSelection === secondSelection){
    alert("iguales")
   }
    firstSelection = 0
    secondSelection = 0
 }
  else{
   firstSelection = e.target.dataset.id
   
  }
setCardsSelected()
  
})
*/
