import { merge } from '../merge-array';

describe('mergeArrays', () => {


  it('should merge two sorted arrays', () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge two sorted arrays', () => {
    const result = merge([1, 3, 5, 16], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 16]);
  });

  it('should handle empty left arrays', () => {
    const result = merge([], [2, 4, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle empty right arrays', () => {
    const result = merge([2, 4, 6], []);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], []);
    expect(result).toEqual([]);
  });
  it('should merge two sorted arrays with max integer at left', () => {
    const result = merge([1, 3, 5, Number.MAX_SAFE_INTEGER], [2, 4]);
    expect(result).toEqual([1, 2, 3, 4, 5, Number.MAX_SAFE_INTEGER]);
  });
  it('should merge two sorted arrays with max integer at right', () => {
    const result = merge([1, 3, 5], [2, 4, Number.MAX_SAFE_INTEGER]);
    expect(result).toEqual([1, 2, 3, 4, 5, Number.MAX_SAFE_INTEGER]);
  });



});
