/**
 * Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m)) where m is the size of the character set
 *
 * @param s - Input string
 * @returns Length of the longest substring without duplicates
 *
 * Example:
 * lengthOfLongestSubstring('abcabcbb') // returns 3
 */
const lengthOfLongestSubstring = (s: string): number => {
  let maxLen: number = 0;
  let left: number = 0;
  const seen: Map<string, number> = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1;
    }
    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

export default lengthOfLongestSubstring;
