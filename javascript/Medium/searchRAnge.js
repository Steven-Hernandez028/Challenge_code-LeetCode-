const searchRange = (nums,target)=>{
    let leftIndex = binarySearch(nums, target, true);
    if(leftIndex === nums.length || nums[leftIndex] !== target){
        return [-1, -1];
    }
    let rightIndex = binarySearch(nums,target, false ) - 1;
    return [leftIndex, rightIndex];
}