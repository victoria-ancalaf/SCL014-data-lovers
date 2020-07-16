import {
  filterType,
  filterGen,
  filterWek,
}
  from '../src/data.js';


describe('filterType', () => {
  it('obtener cuantos tipos pueden tener', () => {
    expect(filterType).toHaveLength(2);
  });

  describe('filterGen', () => {
    it('is a function', () => {
      expect(filterGen).toHaveLength(2);
    });
  });

  describe('filterWek', () => {
    it('Maximo de tipos de debilidad', () => {
      expect(filterWek).toHaveLength(2);
    });
  });
});
