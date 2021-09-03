export const ButtonReset = () => {
      let boton = document.createElement("button");
      boton.textContent = 'iniciar juego';
      boton.classList.add('button-reset')
      boton.addEventListener("click", (e)=>{
          e.preventDefault();
          location.reload(); // e
      });
      return boton;
}