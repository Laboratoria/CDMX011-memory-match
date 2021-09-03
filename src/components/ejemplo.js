const arreglo = ["Charmande", "pikachu", "charizard", "miau", "Ivysur", "Saiduck"]

/*export function random(arreglo){
  let result = ["algo"];
  return result;
}
console.log(random(arreglo));
*/
export function random (array) {
    let currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      console.log(currentIndex);//6
        //console.log(Math.floor(Math.random() * currentIndex))
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; //le resta 1
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [ // lo posiciona de un lado a otro lo regresa (lo de las tarjetitas del video)
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

console.log(random(arreglo))