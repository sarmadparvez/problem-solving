import twoSum from '../src/two-sum';

const sorted = (indices: number[]): number[] => [...indices].sort((a, b) => a - b);

describe('twoSum', () => {
  it('returns correct indices for example 1', () => {
    expect(sorted(twoSum([2, 7, 11, 15], 9))).toEqual([0, 1]);
  });

  it('returns correct indices for example 2', () => {
    expect(sorted(twoSum([3, 2, 4], 6))).toEqual([1, 2]);
  });

  it('returns correct indices for example 3', () => {
    expect(sorted(twoSum([3, 3], 6))).toEqual([0, 1]);
  });

  it('works with negative numbers', () => {
    expect(sorted(twoSum([-1, -2, -3, -4, -5], -8))).toEqual([2, 4]);
  });

  it('returns indices in any order', () => {
    expect(sorted(twoSum([1, 2, 3], 4))).toEqual([0, 2]);
  });

  it('works with large numbers', () => {
    expect(sorted(twoSum([1000000000, 8, 1000000000], 2000000000))).toEqual([0, 2]);
  });

  it('returns empty array when target is equal to one of the numbers', () => {
    expect(twoSum([1, 2, 3], 2)).toEqual([]);
  });
});
