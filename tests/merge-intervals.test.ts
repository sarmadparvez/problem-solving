import mergeIntervals from '../src/merge-intervals';

describe('mergeIntervals', () => {
  it('merges overlapping intervals', () => {
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });

  it('merges intervals with touching endpoints', () => {
    expect(mergeIntervals([[1,4],[4,5]])).toEqual([[1,5]]);
  });

  it('returns single interval unchanged', () => {
    expect(mergeIntervals([[1,2]])).toEqual([[1,2]]);
  });

  it('handles no intervals', () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  it('handles intervals with no overlap', () => {
    expect(mergeIntervals([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]]);
  });

  it('handles intervals with complete overlap', () => {
    expect(mergeIntervals([[1,10],[2,3],[4,8]])).toEqual([[1,10]]);
  });

  it('handles unsorted input', () => {
    expect(mergeIntervals([[8,10],[1,3],[2,6],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });

  it('handles negative coordinates', () => {
    expect(mergeIntervals([[-5,-1],[-3,0],[2,4]])).toEqual([[-5,0],[2,4]]);
  });

  it('merges duplicate identical intervals', () => {
    expect(mergeIntervals([[1,3],[1,3],[1,3]])).toEqual([[1,3]]);
  });

  it('merges intervals with equal start but different ends', () => {
    expect(mergeIntervals([[1,4],[1,5]])).toEqual([[1,5]]);
  });

  it('handles single-point (zero-width) intervals', () => {
    expect(mergeIntervals([[1,1],[2,2],[2,3]])).toEqual([[1,1],[2,3]]);
  });

  it('does not mutate the input array', () => {
    const input = [[3,4],[1,2]];
    mergeIntervals(input);
    expect(input).toEqual([[3,4],[1,2]]);
  });
});

