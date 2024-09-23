import { describe, it, expect } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

it('should transform a string number to a number of type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

it('should transform a string number to a number of type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid';
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numbersValues = ['1', '3', '5']

    const cleanedNumbers = cleanNumbers(numbersValues)

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  })

  it('should return an array of number values if an array of string number values is provided', () => {
    const numbersValues = ['1', '3', '5']

    const cleanedNumbers = cleanNumbers(numbersValues)

    expect(cleanedNumbers).toEqual([1, 3, 5]);
  })

  it('should throw an error if an array with at leaast one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  })
})