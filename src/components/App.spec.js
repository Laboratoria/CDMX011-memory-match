/**
 * @jest-environment jsdom
 */

import {App} from './App.js';
import { duplicateData, suffle } from "../utils.js";
 const items = [
  { id: 'bulbasaur' },
  { id: 'ivysaur' },
  { id: 'venusaur' },
  { id: 'charmander'},
  { id: 'charmeleon'},
]  

const items1 = [
  { id: 'bulbasaur' },
  { id: 'ivysaur' },
  { id: 'venusaur' },
  { id: 'charmander'},
  { id: 'charmeleon'},
]  
describe('App', () => {
    it('should render without crashing', () => {
      const contenedor = App()
      expect(contenedor instanceof HTMLElement).toBe(true);
  
    });
  
});
describe("DuplicateData", () => {
  it("debería duplicar data", () => {
    expect(duplicateData(items)).toHaveLength(10)
  })
})

describe("Suffle", ()=> {
  it("debería ser una función", () => {
    expect(typeof suffle).toBe("function")
  })

  it("deberia revolver data", () => {
const suffleData = suffle(items1)
expect(items[0]).not.toEqual(suffleData[0])
//expect(suffleData==items).toBe(false);
//expect(items).not.toStrictEqual(suffleData)

  })
  /* it("deberia revolver data", () => {
    const duplicate = duplicateData(items)
    const suffleData =suffle(duplicate)

    let comparasion = true
    if( suffleData !== items){
      comparasion = false
    }
    else{
      comparasion = true
    }
    expect(comparasion).toBe(false)
  }) */
})

