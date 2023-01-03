import { findMedianSortedArrays } from "./findMedianSortedArrays"

test('Total array', () => { 
    expect(findMedianSortedArrays([1,3,5],[6,3,2])).toBe([1,6,3,6,6,2])

})