


const threeSumClosest =(nums, target)=>{
    nums.sort((a,b)=> a - b);
    let closestSumn = nums[0] + nums[1] + nums[2];

    for (let i =0; i<nums.length - 2; i++){

        let left = 1 + i;
        let right = nums.length - 1;

        while(left < right ){
            const sum = nums[i] = nums[left] + nums[right];
            if(Math.abs(sum - target) < Math.abs(closestSumn - target)){
                closestSumn = sum;
            }

            if(sum <target) {
                left++;
            }else{
                right--;
            }
        }
    }
    return closestSumn;
}