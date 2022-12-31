// @param {number[]} numns
// @param {number} val
// @return {number}


export const removeElemnt = (nums,val) =>{

       for(let i = 0; i< nums.length; i++){

        if(nums[i] == val){
            nums.splice(i,1);
            i--;
            
        }
       }
       return nums.length 
}

