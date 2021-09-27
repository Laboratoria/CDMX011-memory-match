/* eslint-disable no-unused-vars */
import { random } from '../src/components/App.js';
import {dataOriginal, OtherData} from './mockData.js'

describe('Estos son los test de la funcion random', function (){
  test('Desordena la data',function(){
    let esigualLaData = true; // esto es clave
    let daraAleatoria = OtherData.items
    let dataRandom = random(daraAleatoria)
    if(dataRandom[0] != dataOriginal.items[0] || dataRandom[1] != dataOriginal.items[1] || dataRandom[2] != dataOriginal.items[2] ){
      esigualLaData = false
    }
    expect(esigualLaData).toBe(false)
  })
})