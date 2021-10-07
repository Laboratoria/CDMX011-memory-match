import gameBoard from './gameBoard';

describe('gameBoard', () => {
  it('should render without crashing', () => {
    const el = gameBoard();
    expect(el instanceof HTMLElement).toBe(true);
  });

  it('should print data by default', () => {
      const el = gameBoard{ };
      console.log(el.outerHTML);
   });


});
