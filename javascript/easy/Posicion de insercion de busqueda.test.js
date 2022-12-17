
import { searchInsert } from './Posicion de insercion de busqueda';

test('FuncionPosicion', () => { 
    expect(searchInsert([1,3,4,2,5],3)).toBe(1);
 })

// describe('Posicion de insercion de busqueda', ()=>{
//     test("return index 2",()=>{
//         expect(searchInsert([1,3,2,5,6]),2).toBe(2);
//     });
    
// }
// )