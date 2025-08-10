# Binary Search

## Description
Given a sorted array of integers and a target value, implement binary search to find the target. Return the index if found, otherwise return -1.

## Algorithm Explanation
Binary search works by repeatedly dividing the search interval in half.  
- Start with the entire array.
- Compare the middle element to the target.
- If the middle element is equal to the target, return its index.
- If the target is less than the middle element, repeat the search on the left half.
- If the target is greater, repeat the search on the right half.
- Continue until the target is found or the interval is empty.

This approach has a time complexity of O(log n).

## Function Signature
```typescript
const binarySearch = (data: number[], searchInput: number): number => {
  // implementation
};
```

## Example Inputs and Outputs

| data                | searchInput | Output |
|---------------------|-------------|--------|
| [1, 2, 3, 4, 5]     | 3           | 2      |
| [1, 2, 3, 4, 5]     | 1           | 0      |
| [1, 2, 3, 4, 5]     | 5           | 4      |
| [1, 2, 3, 4, 5]     | 6           | -1     |
| [7]                 | 7           | 0      |
| [7]                 | 8           | -1     |
| [-5, -3, 0, 2, 4]   | -3          | 1      |
| []                  | 1           | -1     |
