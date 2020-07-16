import {
  filterPokmn,
  filterType,
  filterWek,
  filterGen,

} from './data.js';
import data from './data/pokemon/pokemon.js';

// Enlace de primera pantalla a segunda pantalla
const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const btn1 = document.getElementById('btn1');

// llamado a la data
export const allPokemon = data.pokemon;

// crear var, div dinamicos de las cartas de cada Pokemon(imagen, numero, nomb.)
const showPokemonInfo = (allPoke) => {
  allPoke.forEach((pokemon) => {
    const pokeName = pokemon.name;
    const pokeNum = pokemon.num;
    const pokeType = pokemon.type;
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('name', pokeName);
    const pokeImg = document.createElement('img');
    const num = document.createElement('p');
    const names = document.createElement('p');
    const mayus = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    const typePokemon = document.createElement('p');
    const typePokemon2 = document.createElement('p');
    pokeCard.setAttribute('id', 'pCard');

    // le damos una clase y le pasamos el parametro
    pokeCard.classList.add('nameCard');
    num.classList.add('numeros');
    names.classList.add('nombres');
    typePokemon.classList.add(pokeType[0]);
    if ((pokeType.length) > 1) {
      typePokemon2.classList.add(pokeType[1]);
    }
    // le ponemos ih para que la variable se refleje
    num.innerHTML = `# ${pokeNum}`;
    names.innerHTML = mayus;
    pokeImg.src = pokemon.img;
    typePokemon.innerHTML = pokeType[0];
    if ((pokeType.length) > 1) {
      typePokemon2.innerHTML = pokeType[1];
    }

    const containerDiv = document.getElementById('pokemonContainer'); // creamos un contenedor para todas las tarjetas que contendran los pokemones adentro
    containerDiv.appendChild(pokeCard);

    // unimos el contenedor pokecard (tarjetas) con la img y abajo con el numero
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(num);
    pokeCard.appendChild(names);
    pokeCard.appendChild(typePokemon);
    if ((pokeType.length) > 1) { pokeCard.appendChild(typePokemon2); }
  });
};

// accion para que no se muestre la 2 pantalla abajo de la 1 pantalla
btn1.addEventListener('click', () => {
  firstScreen.style.display = 'none';
  secondScreen.style.display = 'flex';
  showPokemonInfo(allPokemon);
});

// Buscador por nombre
const pokemonSearchBar = document.getElementById('searchPokemon');
pokemonSearchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const nameFilter = filterPokmn(term, allPokemon);
  document.getElementById('pokemonContainer').innerHTML = '';// Borro todas las cartas de pokemon
  showPokemonInfo(nameFilter);
});

// Filtro tipo
const selectType = document.querySelector('#tipo');
selectType.addEventListener('change', (e) => {
  const pType = e.target.value;// valor de lo que ingresa el usuario
  const pokemonType = filterType(pType, allPokemon);
  document.getElementById('pokemonContainer').innerHTML = '';
  showPokemonInfo(pokemonType);
});

// Filtro debilidad
const selectWeaknesses = document.querySelector('#debilidad');
selectWeaknesses.addEventListener('change', (e) => {
  const pWek = e.target.value;
  const pokemonWek = filterWek(pWek, allPokemon);
  document.getElementById('pokemonContainer').innerHTML = '';
  showPokemonInfo(pokemonWek);
});
// Filtro generación
const selectGeneration = document.querySelector('#generacion');
selectGeneration.addEventListener('change', (e) => {
  const pGen = e.target.value;
  const pokemonGen = filterGen(pGen, allPokemon);
  document.getElementById('pokemonContainer').innerHTML = '';
  showPokemonInfo(pokemonGen);
});
// FUNCIONALIDAD DEL MODAL
// enlazamos y traemos el modal
const modal = document.getElementById('myModal');
// boton que abre el modal enlace
const btn = document.getElementById('myBtn');

// boton que cierra el modal
const span = document.getElementsByClassName('close')[0];

// para eu cuando el usuario haga click se habra el modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// para que cuando el usuario haga click cierre el modall
span.onclick = function () {
  modal.style.display = 'none';
};

// para que cuando el usuario haga click cierre en cualquier lugar
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
