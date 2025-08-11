# Longest Substring Without Repeating Characters

## Description
Given a string `s`, find the length of the longest substring without duplicate characters.

## Algorithm Explanation
Use a sliding window approach with two pointers and a map to track the last seen index of each character. Move the right pointer to expand the window, and if a duplicate is found, move the left pointer past the previous occurrence.

**How max length is updated:**  
At each step, after adjusting the window (by moving the left pointer if needed), calculate the current window size as `right - left + 1`. If this size is greater than the previous `maxLen`, update `maxLen`. This ensures that `maxLen` always holds the largest window size found so far that contains all unique characters.

**Step-by-step Example (visual):**

For `s = 'abcabcbb'`:

| Step | Window (`s[left...right]`) | Seen Map         | Current Window Size | Max Length Update |
|------|----------------------------|------------------|--------------------|------------------|
| 0    | a                          | {a:0}            | 1                  | maxLen = 1       |
| 1    | ab                         | {a:0, b:1}       | 2                  | maxLen = 2       |
| 2    | abc                        | {a:0, b:1, c:2}  | 3                  | maxLen = 3       |
| 3    | bca                        | {a:3, b:1, c:2}  | 3                  | maxLen stays 3   |
| 4    | cab                        | {a:3, b:4, c:2}  | 3                  | maxLen stays 3   |
| 5    | abc                        | {a:3, b:4, c:5}  | 3                  | maxLen stays 3   |
| 6    | cb                         | {a:3, b:6, c:5}  | 2                  | maxLen stays 3   |
| 7    | b                          | {a:3, b:7, c:5}  | 1                  | maxLen stays 3   |

The longest substring without repeating characters is `'abc'` with length 3.

- Time Complexity: O(n), where n is the length of the string.
- Space Complexity: O(min(n, m)), where m is the size of the character set.

## Function Signature

```typescript
const lengthOfLongestSubstring = (s: string): number => {
  // implementation
};
```

## Example Inputs and Outputs

### Example 1
**Input:** s = 'abcabcbb'  
**Output:** 3

### Example 2
**Input:** s = 'bbbbb'  
**Output:** 1

### Example 3
**Input:** s = 'pwwkew'  
**Output:** 3
