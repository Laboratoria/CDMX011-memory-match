export const DoubleData = (pokemonDatos) =>{
    const dataDubble = [];
  pokemonDatos.forEach((pokemon)=>{
    dataDubble.push(pokemon);
    dataDubble.push(pokemon);
  })
  return dataDubble
}