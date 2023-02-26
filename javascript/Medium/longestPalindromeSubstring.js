let longest = '';
  
// Function to expand around a center
const expandAroundCenter = (left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
};

for (let i = 0; i < s.length; i++) {
  // Check for odd-length palindromes
  let oddPalindrome = expandAroundCenter(i, i);
  if (oddPalindrome.length > longest.length) {
    longest = oddPalindrome;
  }
  
  // Check for even-length palindromes
  let evenPalindrome = expandAroundCenter(i, i+1);
  if (evenPalindrome.length > longest.length) {
    longest = evenPalindrome;
  }
}

return longest;