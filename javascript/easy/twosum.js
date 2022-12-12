export const twoSum = (nums,target)=>{

    for(let i=0; i<nums.length;i++){
        const diff = target-nums[i];
        const numdiff = nums.indexOf(diff);
        if(numdiff !== -1 && numdiff !== i){
            return[numdiff,i]
        }
    }
}