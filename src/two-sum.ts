/**
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example:
 *   twoSum([2,7,11,15], 9) // returns [0,1]
 *
 * Algorithm:
 *   - Use a hash map to store value:index pairs.
 *   - For each element, check if (target - current) exists in the map.
 *   - If found, return indices.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Returns indices of two numbers in nums that add up to target.
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of the two numbers
 *
 * @example
 * twoSum([2, 7, 11, 15], 9); // returns [0, 1]
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
