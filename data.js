
// 1 filtro de nuestro proyecto buscador :D
// eslint-disable-next-line arrow-body-style
export const filterPokmn = (term, allPokemon) => {
  return allPokemon.filter(pokemon => pokemon.name.indexOf(term) !== -1);
};

// Filtro para buscar por tipo de Pokémon
export const filterType = (pType, allPokemon) => {
  if (pType === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.type[0] === pType || pokemon.type[1] === pType);
};// filtra los pokemones que tengan dos tipos

export const filterWek = (pWek, allPokemon) => {
  if (pWek === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.weaknesses[0] === pWek
  || pokemon.weaknesses[1] === pWek
  || pokemon.weaknesses[2] === pWek
  || pokemon.weaknesses[3] === pWek);
};


export const filterGen = (pGen, allPokemon) => {
  if (pGen === '0') {
    return allPokemon;
  }
  return allPokemon.filter(pokemon => pokemon.generation.name === pGen);
};
