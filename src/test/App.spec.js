import { mockData, originalData} from './mockTest.js';
import { Shuffle } from "../utils/Shuffle.js";
import { DoubleData } from '../utils/DoubleData.js'

describe('deberia mostrar nuestro arreglo de forma', () => {
  it('deberia ser una funcion', () => {
    expect(typeof Shuffle).toBe('function');
  });
  it('Random',()=>{
    const doubleData = DoubleData(mockData.items);
    const shuffleData = Shuffle(doubleData);

    let comparison = true;

    if(shuffleData!=originalData.items){
      comparison = false;
    }else{
      comparison = true;
    }
    expect(comparison).toBe(false)
  })
  it ('Data doble deberia mandar double', () => {
    const doubleData = DoubleData(mockData.items);
    expect(doubleData.length).toBe(6)
  })
  
});
