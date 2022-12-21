import { lettercombination } from "./letterCombinations";

test('LetterCombination', () => { 
    expect(lettercombination("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
 })