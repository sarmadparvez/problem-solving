# Longest Substring Without Repeating Characters — Solution

## Intuition
A substring with no repeats is a **window of unique characters**. Extend the window to the right one
character at a time; the instant a character already inside the window reappears, the window is
invalid, so jump the left edge to just past that character's previous position. Remembering each
character's last index makes that jump O(1) instead of shrinking one step at a time.

## Algorithm Explanation
Use a sliding window with two pointers and a map of each character's last seen index. Move the right
pointer to expand the window; if the current character was already seen **inside** the window, jump
the left pointer to just past its previous occurrence. After each move, update `maxLen` with the
current window size `right - left + 1`, so `maxLen` always holds the largest all-unique window found
so far.

## Dry Run
For `s = 'abcabcbb'` → returns `3` (the substring `'abc'`). The window `[...]` slides right; when a
character repeats inside it, `left` jumps past the previous occurrence:

```
right=0   [a]bcabcbb    window "a"    size 1   maxLen 1
right=2   [abc]abcbb    window "abc"  size 3   maxLen 3
right=3   a[bca]bcbb    'a' seen at 0 → left jumps to 1; window "bca"  size 3
right=5   abc[abc]bb    window "abc"  size 3
right=6   abcab[cb]b    'b' repeats  → left jumps to 5; window "cb"   size 2
right=7   abcabcb[b]    'b' repeats  → left jumps to 7; window "b"    size 1
```

Full per-step trace, including the last-seen-index map:

| Step (right) | char | seen (before) | left | window `s[left..right]` | size | maxLen |
|------|------|---------------|------|-------------------------|------|--------|
| 0 | a | {}                | 0 | a   | 1 | 1 |
| 1 | b | {a:0}             | 0 | ab  | 2 | 2 |
| 2 | c | {a:0, b:1}        | 0 | abc | 3 | 3 |
| 3 | a | {a:0, b:1, c:2}   | 1 | bca | 3 | 3 |
| 4 | b | {a:3, b:1, c:2}   | 2 | cab | 3 | 3 |
| 5 | c | {a:3, b:4, c:2}   | 3 | abc | 3 | 3 |
| 6 | b | {a:3, b:4, c:5}   | 5 | cb  | 2 | 3 |
| 7 | b | {a:3, b:6, c:5}   | 7 | b   | 1 | 3 |

At step 3, char `a` was last seen at index 0 (inside the window), so `left` jumps to 1 and the window
stays all-unique. The largest window seen has size 3.

## Complexity
- Time: O(n), where n is the length of the string.
- Space: O(min(n, m)), where m is the size of the character set.

## Pitfalls & Edge Cases
- Only move `left` when the repeat is **inside** the window — guard with `seen.get(char) >= left`.
  A stale index from before `left` must be ignored, e.g. `'abba'`: when the second `a` appears its
  old index `0` is left of the window and must not drag `left` backward.
- `left` must never move backwards; the `>= left` guard guarantees this.
- Update `maxLen` on **every** step (size `right - left + 1`), not only when a repeat occurs.
- Edge cases: empty string → `0`; single character → `1`; all identical (`'bbbb'`) → `1`.
