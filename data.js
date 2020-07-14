// estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';


// 1 filtro de nuestro proyecto buscador :D
export const filterPokmn = (e, allPokemon) => {
  const term = e.target.value.toLowerCase();
  return allPokemon.filter(pokemon => pokemon.name.indexOf(term) !== -1);
};

// Filtro para buscar por tipo de Pokémon
export const filterType = (e, allPokemon) => {
  const pType = e.target.value;// valor de lo que ingresa el usuario
  if (pType === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.type[0] === pType || pokemon.type[1] === pType);
};// filtra los pokemones que tengan dos tipos

export const filterWek = (e, allPokemon) => {
  const pWek = e.target.value;
  if (pWek === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.weaknesses[0] === pWek
  || pokemon.weaknesses[1] === pWek
  || pokemon.weaknesses[2] === pWek
  || pokemon.weaknesses[3] === pWek);
};


export const filterGen = (e, allPokemon) => {
  const pGen = e.target.value;
  if (pGen === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.generation.name === pGen);
};

export const filterOrder = (e, allPokemon) => {
  const pOrder = e.target.value;
  if (pOrder === '0') {
    return allPokemon;
  }
  if (pOrder === '1')
  return pokemon.name.sort();
}