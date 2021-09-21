export const newGame = () => {
  let button = document.createElement('button');
  button.textContent = 'Start game';
  button.className = 'btnNewGame';
  button.addEventListener('click',(e) => {
    e.preventDefault();
    location.reload();
  });
  return button;
}
