const threeSum = (nums)=>{

    let result = [];

    // Sort the array in non-descending order
    nums.sort((a, b) => a - b);
  
    // Iterate through the array, selecting one element at a time as a potential first element of a triplet
    for (let i = 0; i < nums.length - 2; i++) {
      // If the current element is the same as the previous one, skip it to avoid duplicate triplets
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      // Use two pointers to find the remaining two elements of the triplet
      let j = i + 1;
      let k = nums.length - 1;
  
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
  
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
  
          // Skip over any duplicate elements to avoid duplicate triplets
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k--;
          }
  
          // Move the pointers to the next unique elements
          j++;
          k--;
        } else if (sum < 0) {
          // If the sum is less than zero, increment the left pointer to increase the sum
          j++;
        } else {
          // If the sum is greater than zero, decrement the right pointer to decrease the sum
          k--;
        }
      }
    }
  
    return result;
}