# Two Sum — Solution

## Intuition
For each number you only need its **complement** `target - num`. Rather than scanning the rest of
the array to find it (O(n²)), remember every value seen so far in a hash map so the complement check
is O(1). Storing each value's index lets you return the pair immediately.

## Algorithm Explanation
Use a hash map to store each number's value and its index as you iterate through the array. For each element, check if `target - nums[i]` exists in the map. If it does, return the indices.

## Dry Run
`twoSum([3, 2, 4], 6)` → returns `[1, 2]`. One pass; the map remembers values already seen:

| Step (i) | nums[i] | complement = 6 − nums[i] | complement in map? | map after step |
|----------|---------|--------------------------|--------------------|----------------|
| 0 | 3 | 3 | no                          | {3: 0}       |
| 1 | 2 | 4 | no                          | {3: 0, 2: 1} |
| 2 | 4 | 2 | yes → value 2 sits at index 1 | return `[1, 2]` |

At `i = 2` the complement `2` is already in the map (index 1), so the pair `[1, 2]` is found in a
single scan — no nested loop.

## Complexity
- Time: O(n)
- Space: O(n)

## Pitfalls & Edge Cases
- Look up the complement **before** inserting the current value, or an element could pair with
  itself (e.g. `target = 2 * nums[i]`).
- Works with duplicate values (`[3,3], 6`) because the earlier index is already stored when the
  second one is processed.
- Returns as soon as a pair is found (honoring the "any order" allowance); returns `[]` if none
  exists.
