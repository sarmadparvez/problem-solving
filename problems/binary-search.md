# Binary Search

## Description
Given a sorted array of integers and a target value, implement binary search to find the target. Return the index if found, otherwise return -1.

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
