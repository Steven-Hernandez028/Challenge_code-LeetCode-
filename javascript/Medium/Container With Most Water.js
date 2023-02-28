
const maxArea = (height)=>{
    let max = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    max = Math.max(max, minHeight * (right - left));
    
    while (height[left] <= minHeight && left < right) {
      left++;
    }
    
    while (height[right] <= minHeight && left < right) {
      right--;
    }
  }
  
  return max;
}