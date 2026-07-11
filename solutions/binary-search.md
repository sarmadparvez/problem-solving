# Binary Search — Solution

## Intuition
Because the array is **sorted**, comparing the target to the middle element tells you which half it
must lie in — so you can discard the other half every step. Repeatedly halving the search space is
what turns a linear scan into O(log n).

## Algorithm Explanation
Binary search works by repeatedly dividing the search interval in half.
- Start with the entire array.
- Compare the middle element to the target.
- If the middle element is equal to the target, return its index.
- If the target is less than the middle element, repeat the search on the left half.
- If the target is greater, repeat the search on the right half.
- Continue until the target is found or the interval is empty.

## Dry Run
`binarySearch([1, 2, 3, 4, 5, 6, 7], 3)` → returns `2`. Each step halves the search range:

```
step 1:  [1 2 3 4 5 6 7]   mid = idx 3 → 4;  3 < 4  → search left half
step 2:  [1 2 3]           mid = idx 1 → 2;  3 > 2  → search right half
step 3:  [3]               mid = idx 2 → 3;  match! → return index 2
```

| Step | left | right | mid | data[mid] | compare | next        |
|------|------|-------|-----|-----------|---------|-------------|
| 1    | 0    | 6     | 3   | 4         | 3 < 4   | right = mid − 1 = 2 |
| 2    | 0    | 2     | 1   | 2         | 3 > 2   | left = mid + 1 = 2  |
| 3    | 2    | 2     | 2   | 3         | 3 = 3   | return `2`  |

If the target is absent, `left` eventually passes `right`, the loop ends, and it returns `-1`.

## Complexity
- Time: O(log n)
- Space: O(1)

## Pitfalls & Edge Cases
- Empty array → `right = -1`, the loop never runs, returns `-1`.
- The loop condition is `left <= right` (not `<`), so a single-element range is still examined.
- The array must be sorted ascending — on unsorted input the result is meaningless.
- With duplicates it returns *some* matching index, not necessarily the first or last.
- `mid = Math.floor((left + right) / 2)`; `left + Math.floor((right - left) / 2)` is the
  overflow-safe form in languages with fixed-width integers.
