/**
 * Binary Search
 * Given a sorted array of integers and a target value, implement binary search to find the target.
 * Return the index if found, otherwise return -1.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param data - The sorted array of integers
 * @param searchInput - The target value to search for
 * @returns The index of the target if found, otherwise -1
 *
 * Example:
 * binarySearch([1, 2, 3, 4, 5], 3) // returns 2
 */
const binarySearch = (data: number[], searchInput: number): number => {
  let left: number = 0;
  let right: number = data.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (data[mid] === searchInput) {
      return mid;
    } else if (data[mid] < searchInput) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

export default binarySearch;
