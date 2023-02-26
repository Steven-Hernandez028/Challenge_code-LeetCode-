namespace medium
{

    public class method2


    {
        public int LengthOfLongestSubstring(string s)
        {
            int maxLength = 0;
            int left = 0;
            Dictionary<char, int> seen = new Dictionary<char, int>();

            for (int right = 0; right < s.Length; right++)
            {
                char c = s[right];
                if (seen.ContainsKey(c) && seen[c] >= left)
                {
                    left = seen[c] + 1;
                }
                seen[c] = right;
                maxLength = Math.Max(maxLength, right - left + 1);
            }

            return maxLength;
        }

    }


}