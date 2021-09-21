export const DoubleData = (pokemonDatos) =>{
    //declaro un arreglo
    const dataDubble = [];
    //recorro el arreglo
  pokemonDatos.forEach((pokemon)=>{
    //se duplica la data
    dataDubble.push(pokemon);
    dataDubble.push(pokemon);
  })
  return dataDubble
}