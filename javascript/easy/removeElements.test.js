import { expect } from "vitest";
import { removeElemnt } from "./removeElements";

test.skip('Remove Element', () => { 
    expect(removeElemnt([5,3,1,5,6,2,3,7,5,3,5,2,1,2],2)).toBe(11);
 })