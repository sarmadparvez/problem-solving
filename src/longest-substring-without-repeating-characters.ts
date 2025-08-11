/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * Example:
 *   lengthOfLongestSubstring('abcabcbb') // 3
 *   lengthOfLongestSubstring('bbbbb') // 1
 *   lengthOfLongestSubstring('pwwkew') // 3
 *
 * Algorithm:
 *   - Use sliding window with two pointers and a map to track last seen indices.
 *   - Move right pointer, update left pointer if duplicate found.
 *   - Update max length at each step.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m))
 */

/**
 * Returns the length of the longest substring without repeating characters.
 * @param s - Input string
 * @returns Length of the longest substring without duplicates
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

