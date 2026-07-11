# Merge Intervals

## Description
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

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