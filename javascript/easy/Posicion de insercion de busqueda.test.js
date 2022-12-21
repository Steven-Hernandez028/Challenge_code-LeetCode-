
import { searchInsert } from './Posicion de insercion de busqueda';

test('FuncionPosicion', () => { 
    expect(searchInsert([1,3,4,2,5],3)).toBe(1);
 })

