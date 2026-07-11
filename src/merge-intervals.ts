/**
 * Merge Intervals
 * Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and
 * return the non-overlapping intervals that cover all the input intervals.
 *
 * Time Complexity: O(n log n) (due to sorting)
 * Space Complexity: O(n)
 *
 * @param intervals - Array of intervals [start, end]
 * @returns Array of merged non-overlapping intervals
 *
 * Example:
 * mergeIntervals([[1,3],[2,6],[8,10],[15,18]]) // returns [[1,6],[8,10],[15,18]]
 */
const mergeIntervals = (intervals: number[][]): number[][] => {
  if (intervals.length <= 1) return intervals;

  // Sort a copy by start time so the caller's array is not mutated
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [];
  let [prevStart, prevEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [currStart, currEnd] = sorted[i];
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

