// @param {number[]} nums1
// @param {number[]} nums2
// @return {number}



export const findMedianSortedArrays = (nums1, nums2)=>{
     const totalArray = [...nums1,  ...nums2].sort((a,b)=> a-b);
     let idx = Math.floor(totalArray.length/2) - 1;
     return totalArray.length % 2 === 0? (totalArray[idx] + totalArray[idx+1])/2 :totalArray[idx]
}