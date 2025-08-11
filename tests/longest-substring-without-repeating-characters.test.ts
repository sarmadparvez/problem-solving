import lengthOfLongestSubstring from '../src/longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', () => {
  it('returns 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('returns 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('returns 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns 5 for "abcdef"', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  it('returns 2 for "aab"', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  });

  it('returns 1 for string with all same characters', () => {
    expect(lengthOfLongestSubstring('aaaaa')).toBe(1);
  });

  it('returns correct value for string with spaces and symbols', () => {
    expect(lengthOfLongestSubstring('a b!c@d#')).toBe(8);
  });
});

