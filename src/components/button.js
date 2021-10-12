const button = () => {
    const el = document.createElement('button');
    el.className = 'buttonShuffler';
    el.textContent = 'shuffle cards'
    el.addEventListener('click', function(event){
    console.log(':P')
        
    })
    return el;
}
export default button;

