public class Solution {
    public int Trap(int[] height) {
    int n = height.Length;
    int water = 0;
    int leftMax = 0, rightMax = 0;
    int left = 0, right = n - 1;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left]; 
            }
            left++; 
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right]; 
            } else {
                water += rightMax - height[right]; 
            }
            right--; 
        }
    }
    
    return water;
    }
}