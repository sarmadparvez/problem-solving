/**
 * Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 *
 * Constraints:
 * - 1 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= starti <= endi <= 10^4
 */

/**
 * Merges overlapping intervals.
 * @param intervals - Array of intervals [start, end]
 * @returns Array of merged non-overlapping intervals
 *
 * Time Complexity: O(n log n) (due to sorting)
 * Space Complexity: O(n)
 *
 * @example
 * mergeIntervals([[1,3],[2,6],[8,10],[15,18]]); // [[1,6],[8,10],[15,18]]
 */
const mergeIntervals = (intervals: number[][]): number[][] => {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by prevStart time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [];
  let [prevStart, prevEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    if (currStart <= prevEnd) {
      // Overlapping intervals, merge
      prevEnd = Math.max(prevEnd, currEnd);
    } else {
      // No overlap, push previous interval
      merged.push([prevStart, prevEnd]);
      prevStart = currStart;
      prevEnd = currEnd;
    }
  }
  merged.push([prevStart, prevEnd]);
  return merged;
};

export default mergeIntervals;

