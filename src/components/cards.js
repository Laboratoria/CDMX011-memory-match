//mostrar imagenes
const carta= (card) => {
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
    backCard.appendChild(imagenBack)
    contenedor.appendChild(frontCard)
    contenedor.appendChild(backCard) 
    cardContent.appendChild(contenedor)
   

    let firstSelection;
    let secondSelection;
   const setCardsSelected = () => {
     console.log("first",firstSelection)
     console.log("second",secondSelection)
   }
    cardContent.addEventListener("click",(e)=>{
      const clicked = e.target
 console.log(clicked)
      if(clicked.parentElement.classList.contains("contenedor"))
        clicked.parentElement.classList.add("cardShow")
   if (firstSelection == 0){
     firstSelection= clicked.parentElement.dataset.id;
   }else{
     secondSelection = clicked.parentElement.dataset.id
     setCardsSelected()

   }

      })
  
    /* frontCard.addEventListener("click",(e)=>{
      const clicked = e.currentTarget
      const id= clicked.dataset.id
      clicked.classList.add("selected")
      console.log(id)
    let carChosen=[]
      let firstGuess= null
      let secondGuess = null
      
    if (firstGuess !== null){
      secondGuess= clicked.dataset.id

        if (firstGuess === secondGuess) {
          
          clicked.classList.add('match')
        }
        firstGuess= null
        secondGuess = null
        
      }else {
         firstGuess=clicked.dataset.id
        }
       
     
      
      
    

     }) */
 
    return cardContent
  };


  
  //Separar cada imagen 
  export const cardContainer = (data) => {
    const container = document.createElement("div")
    container.className= "cardsContainer"
      data.forEach(function(card){
      container.appendChild(carta(card))
   
    });
    
    // eslint-disable-next-line no-console
    //console.log(container)
    return container
  }


    
  