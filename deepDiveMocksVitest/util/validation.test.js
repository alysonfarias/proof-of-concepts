import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';
import { ValidationError } from './errors.js';
describe('validateNotEmpty', () => {
  it('should not throw an error if text is not empty', () => {
    const validText = 'Hello, world!';
    const errorMessage = 'This field is required';

    expect(() => validateNotEmpty(validText, errorMessage)).not.toThrow();
  });

  it('should throw a ValidationError if text is empty', () => {
    const emptyText = '';
    const errorMessage = 'This field is required';

    // Expect the function to throw a ValidationError
    expect(() => validateNotEmpty(emptyText, errorMessage)).toThrow(ValidationError);
  });

  it('should throw a ValidationError if text is only whitespace', () => {
    const whitespaceText = '   ';
    const errorMessage = 'This field is required';

    // Expect the function to throw a ValidationError
    expect(() => validateNotEmpty(whitespaceText, errorMessage)).toThrow(ValidationError);
  });

  it('should throw the correct error message', () => {
    const emptyText = '';
    const errorMessage = 'Please enter a valid value';

    // Expect the function to throw a ValidationError with a specific message
    expect(() => validateNotEmpty(emptyText, errorMessage)).toThrowError(errorMessage);
  });
});