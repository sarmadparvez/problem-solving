/**
 * Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that
 * they add up to target. Each input has exactly one solution, and the same element may not be used
 * twice. The answer may be returned in any order.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of the two numbers that add up to target
 *
 * Example:
 * twoSum([2, 7, 11, 15], 9) // returns [0, 1]
 */
const twoSum = (nums: number[], target: number): number[] => {
  const numToIndex: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement) as number, i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
};

export default twoSum;
