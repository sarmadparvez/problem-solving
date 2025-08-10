import binarySearch from '../src/binary-search';

describe('binarySearch', () => {
  it('finds target in the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('finds target at the beginning', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it('finds target at the end', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('returns -1 for missing target', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('works with empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it('works with single-element array (found)', () => {
    expect(binarySearch([7], 7)).toBe(0);
  });

  it('works with single-element array (not found)', () => {
    expect(binarySearch([7], 8)).toBe(-1);
  });

  it('works with negative numbers', () => {
    expect(binarySearch([-5, -3, 0, 2, 4], -3)).toBe(1);
  });
});
