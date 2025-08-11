# Two Sum

## Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Algorithm Explanation
Use a hash map to store each number's value and its index as you iterate through the array. For each element, check if `target - nums[i]` exists in the map. If it does, return the indices. This approach achieves O(n) time complexity and O(n) space complexity.

## Function Signature

```typescript
const twoSum = (nums: number[], target: number): number[] => {
  // implementation
};
```

## Example Inputs and Outputs

### Example 1
**Input:** nums = [2,7,11,15], target = 9  
**Output:** [0,1]

### Example 2
**Input:** nums = [3,2,4], target = 6  
**Output:** [1,2]

### Example 3
**Input:** nums = [3,3], target = 6  
**Output:** [0,1]

