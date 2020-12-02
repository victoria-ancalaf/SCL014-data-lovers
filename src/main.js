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
const btn1 = document.getElementById('btn-home');
const modalType = document.getElementById('modalType');
const modalWeight = document.getElementById('modalWeight');
const modalHeight = document.getElementById('modalHeight');
const imgModal = document.getElementById('imgModal');
const nameModal = document.getElementById('nameModal');
const infoContent = document.getElementById('infoContent');
const mResis = document.getElementById('mResis');
const pokeModal = document.getElementById('pokeModal');
// llamado a la data
export const allPokemon = data.pokemon;

const showModal = (pokemon) => {
  pokeModal.style.display = 'block';
  const imgMo = document.createElement('img');
  imgMo.src = pokemon.img;
  imgModal.innerHTML = "";
  imgModal.appendChild(imgMo);
  nameModal.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  infoContent.innerHTML = `${pokemon.about}`;
  modalType.innerHTML = `${pokemon.type}`;
  modalWeight.innerHTML = `Weight: ${pokemon.size.weight}`;
  modalHeight.innerHTML = `Height: ${pokemon.size.height}`;
  mResis.innerHTML = `Resistant: ${pokemon.resistant}`;
};

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
    const typeCont = document.createElement('div');
    const innerCard = document.createElement('div');
    pokeCard.setAttribute('id', 'pCard');

    // le damos una clase y le pasamos el parametro
    pokeCard.classList.add('nameCard');
    num.classList.add('numeros');
    names.classList.add('nombres');
    typeCont.classList.add('orderType');
    innerCard.classList.add('innerCard');
    mResis.classList.add('mResistant');
    modalType.classList.add('mType');
    infoContent.classList.add('aboutPokemon');

    typePokemon.classList.add(pokeType[0]);
    if ((pokeType.length) > 1) {
      typePokemon2.classList.add(pokeType[1]);
    }

    pokeCard.addEventListener('click', () => {
      showModal(pokemon);
    });

    
    num.innerHTML = `# ${pokeNum}`;
    names.innerHTML = mayus;
    pokeImg.src = pokemon.img;
    typePokemon.innerHTML = pokeType[0];
    if ((pokeType.length) > 1) {
      typePokemon2.innerHTML = pokeType[1];
    }

    const containerDiv = document.getElementById('pokemonContainer'); // creamos un contenedor para todas las tarjetas que contendran los pokemones adentro
    containerDiv.appendChild(pokeCard);
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(innerCard);
    innerCard.appendChild(num);
    innerCard.appendChild(names);
    innerCard.appendChild(typeCont);
    typeCont.appendChild(typePokemon);
    if ((pokeType.length) > 1) { typeCont.appendChild(typePokemon2); }
  });
};

// accion para que no se muestre la 2 pantalla abajo de la 1 pantalla
btn1.addEventListener('click', () => {
  firstScreen.style.display = 'none';
  secondScreen.style.display = 'flex';
  showPokemonInfo(allPokemon);
});

// Modal
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
  pokeModal.style.display = 'none';
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
