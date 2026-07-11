# Merge Intervals — Solution

## Intuition
Once intervals are **sorted by start**, any interval that overlaps a given one must come immediately
after it. So a single left-to-right sweep — keeping a current interval and stretching its end
whenever the next one starts before that end — merges everything, with no need to compare all pairs.

## Algorithm Explanation
1. Sort the intervals by their start value.
2. Iterate through the sorted intervals, merging overlapping intervals by comparing the current interval's start with the previous interval's end.
3. If intervals overlap, update the end of the merged interval.
4. If they do not overlap, add the previous interval to the result and start a new merge.
5. Return the merged intervals.

## Dry Run
`mergeIntervals([[1,3],[2,6],[8,10],[15,18]])` → `[[1,6],[8,10],[15,18]]`. Already sorted by start, so
we sweep left to right, extending `prev` while intervals touch:

```
1  3                          [1,3]
   2      6                   [2,6]    overlaps (2 ≤ 3)  → merge   → [1,6]
              8  10           [8,10]   gap     (8 > 6)   → emit [1,6], start [8,10]
                     15  18   [15,18]  gap     (15 > 10) → emit [8,10], start [15,18]
```

| Step | curr    | prev (start,end) | curr.start ≤ prev.end? | action                              | merged so far        |
|------|---------|------------------|------------------------|-------------------------------------|----------------------|
| init | —       | [1,3]            | —                      | seed `prev` with the first interval | []                   |
| i=1  | [2,6]   | [1,3]            | 2 ≤ 3 ✓                | extend: prev.end = max(3,6) = 6     | []                   |
| i=2  | [8,10]  | [1,6]            | 8 ≤ 6 ✗                | push `prev`; prev = [8,10]          | [[1,6]]              |
| i=3  | [15,18] | [8,10]           | 15 ≤ 10 ✗              | push `prev`; prev = [15,18]         | [[1,6],[8,10]]       |
| end  | —       | [15,18]          | —                      | push the final `prev`               | [[1,6],[8,10],[15,18]] |

## Complexity
- Time: O(n log n) due to sorting.
- Space: O(n) for storing the result.

## Pitfalls & Edge Cases
- Sort by start first — the single sweep is only correct on start-sorted input.
- Touching intervals count as overlapping: the test is `currStart <= prevEnd` (`<=`), so
  `[1,4],[4,5]` merges to `[1,5]`.
- Extend with `Math.max(prevEnd, currEnd)` — the next interval may be fully contained (e.g. `[1,10]`
  then `[2,3]`), so don't just assign `currEnd`.
- Remember to push the final `prev` after the loop ends.
- Empty or single-interval input is returned unchanged (the `intervals.length <= 1` guard).
