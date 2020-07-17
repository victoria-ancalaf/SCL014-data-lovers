import {
  filterType,
  filterGen,
  filterWek,
  filterPokmn,
} from '../src/data.js';

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });
  it('is a function', () => {
    expect(filterType).toBe(filterType);
  });
});

describe('filterGen', () => {
  it('is a function', () => {
    expect(typeof filterGen).toBe('function');
  });
  it('is a function', () => {
    expect(filterGen).toBe(filterGen);
  });
});

describe('filterWek', () => {
  it('is a function', () => {
    expect(typeof filterWek).toBe('function');
  });
  it('is a function', () => {
    expect(filterWek).toBe(filterWek);
  });
});

describe('filterPokmn', () => {
  it('is a function', () => {
    expect(typeof filterPokmn).toBe('function');
  });
  it('is a function', () => {
    expect(filterPokmn).toBe(filterPokmn);
  });
});


/* test tipo grass */
const pokemonType = [{
  name: 'bulbasaur',
  type: [
    'grass',
  ],
}];

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should return "grass" for filter "type"', () => {
    expect(filterType('grass', pokemonType)).toEqual(pokemonType);
  });
});

/* test tipo ghost */
const pokeGhost = [{
  name: 'gastly',
  type: [
    'ghost',
  ],
}];

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should return "ghost" for filter "type"', () => {
    expect(filterType('ghost', pokeGhost)).toEqual(pokeGhost);
  });
});



/* test debilidad a fighting */
const weakPoke = [{
  name: 'jigglypuff',
  weaknesses: [
    'fighting',
  ],
}];

describe('filterWek', () => {
  it('is a function', () => {
    expect(typeof filterWek).toBe('function');
  });

  it('should return "fighting" for filter "weaknesses"', () => {
    expect(filterWek('fighting', weakPoke)).toEqual(weakPoke);
  });
});


// Filtro por buscador nombre 'rattata'
const namePoke = [{
  name: 'rattata',
}];

describe('filterPokmn', () => {
  test('is a function', () => {
    expect(typeof filterPokmn).toBe('function');
  });

  test('should return "rattata" for filter "name"', () => {
    expect(filterPokmn('rattata', namePoke)).toEqual(namePoke);
  });
});

// Filtro por Generacion
const pokeGen = [{
  name: 'ivysaur',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
}];

describe('filterGen', () => {
  test('is a function', () => {
    expect(typeof filterGen).toBe('function');
  });

  test('should return "kanto" for filter "generation"', () => {
    expect(filterGen('kanto', pokeGen)).toEqual(pokeGen);
  });
});