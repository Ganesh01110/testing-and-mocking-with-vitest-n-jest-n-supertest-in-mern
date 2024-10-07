import {describe, expect, test , it} from '@jest/globals';
import {sum,multiply} from '../index';

describe('testing sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 10 + 2 to equal 12', () => {
    expect(sum(10, 2)).toBe(12);
  });

  // module for sum where all test case of sum wiill be
  // "test" in place of "it" can be used
  
  // we can do nested describe i.e 

  // describe('testing sum module', () => {
  //   describe('testing sum module', () => {
  //     test-1
  //     test-2...
  //   }
  // }
});

// another way is
describe('testing multiply function', () => {
  it('multiply : 1 * 2 to equal 2', () => {
    const finalanswer = multiply(1,2);
    expect(finalanswer).toBe(2);
    // expect(multiply(1, 2)).toBe(2);
  });

  it('multiply : 10 * -2 should return a nagative number :: -20', () => {
    expect(multiply(10, -2)).toBe(-20);
  });

});