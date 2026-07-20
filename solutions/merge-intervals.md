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
- Space: O(n) for the sorted copy and the result.

### Why — reading the big-O

**What `log n` means.** In algorithm analysis `log n` is log base 2: how many times you can halve
`n` before reaching 1 (equivalently, the power you raise 2 to in order to get `n`). It grows very
slowly — `log₂(1,000,000) ≈ 20` — and shows up whenever work repeatedly *halves* something or has the
shape of a balanced tree of depth `log n`.

**What `n log n` means.** `log n` work done `n` times — the signature cost of comparison sorting.
Merge sort makes it visual: splitting the array in half repeatedly gives `log n` levels; merging back
touches all `n` elements at each level, so `n` per level × `log n` levels = `n log n`. (This is also a
proven lower bound — no comparison sort beats it in the worst case.)

**Why this problem is `O(n log n)`.** Two phases:
- Sort by start value → `O(n log n)` (the dominant cost).
- One left-to-right sweep, each interval visited once → `O(n)`.

Total `O(n log n) + O(n)`; big-O keeps only the fastest-growing term, so it collapses to
`O(n log n)`. It is `n log n` and not `n` purely because of the required sort.

**Why the space is `O(n)`.** Beyond the input we allocate: the `[...intervals]` copy (made so the
caller's array is not mutated) → `O(n)`; the `output` list, which holds up to `n` intervals when none
overlap → `O(n)`; the sort's internal buffer (V8's Timsort) → up to `O(n)`; plus a few scalar
variables → `O(1)`. The largest term wins → `O(n)`. Note the copy is a deliberate trade: sorting in
place would drop auxiliary space toward `O(log n)` (recursion-stack depth) but would mutate the
caller's array.

## Pitfalls & Edge Cases
- Sort by start first — the single sweep is only correct on start-sorted input.
- Touching intervals count as overlapping: the test is `currStart <= prevEnd` (`<=`), so
  `[1,4],[4,5]` merges to `[1,5]`.
- Extend with `Math.max(prevEnd, currEnd)` — the next interval may be fully contained (e.g. `[1,10]`
  then `[2,3]`), so don't just assign `currEnd`.
- Remember to push the final `prev` after the loop ends.
- Empty or single-interval input is returned unchanged (the `intervals.length <= 1` guard).
