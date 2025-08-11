# Merge Intervals

## Description
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Algorithm Explanation
1. Sort the intervals by their start value.
2. Iterate through the sorted intervals, merging overlapping intervals by comparing the current interval's start with the previous interval's end.
3. If intervals overlap, update the end of the merged interval.
4. If they do not overlap, add the previous interval to the result and start a new merge.
5. Return the merged intervals.

- Time Complexity: O(n log n) due to sorting.
- Space Complexity: O(n) for storing the result.

## Function Signature

```typescript
const mergeIntervals = (intervals: number[][]): number[][] => {
  // implementation
};
```

## Example Inputs and Outputs

### Example 1
**Input:** [[1,3],[2,6],[8,10],[15,18]]  
**Output:** [[1,6],[8,10],[15,18]]

### Example 2
**Input:** [[1,4],[4,5]]  
**Output:** [[1,5]]