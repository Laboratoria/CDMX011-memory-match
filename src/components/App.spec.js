import {App, shuffle} from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const imgDiv = App();
    expect(imgDiv instanceof HTMLElement).toBe(true);
  });
});

describe('shuffle', () => {
it('it should be a function', () => {
  expect(typeof shuffle).toEqual('function');
});

  it('should shuffle the cards', () => {
      const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(shuffle(cards) == cards).toBe(false);
  });

});
