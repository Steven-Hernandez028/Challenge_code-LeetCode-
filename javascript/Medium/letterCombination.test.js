import { lettercombination } from "./letterCombinations";

test.skip('LetterCombination', () => { 
    expect(lettercombination("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
 })