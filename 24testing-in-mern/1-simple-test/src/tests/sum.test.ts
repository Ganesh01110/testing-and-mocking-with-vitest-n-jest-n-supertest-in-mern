import {describe, expect, test} from '@jest/globals';
import {sum,multiply} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 10 + 2 to equal 12', () => {
    expect(sum(10, 2)).toBe(12);
  });

  // module for sum where all test case of sum wiill be
  // "test" in place of "it" can be used
});

describe('multiply module', () => {
  test('multiply : 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test('multiply : 10 * 2 to equal 20', () => {
    expect(multiply(10, 2)).toBe(20);
  });

});