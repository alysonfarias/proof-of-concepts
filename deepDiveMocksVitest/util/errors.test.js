import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors.js';

// Tests for HttpError
describe('HttpError', () => {
  it('should correctly set the statusCode, message, and data', () => {
    const statusCode = 404;
    const message = 'Not Found';
    const data = { resource: 'User' };

    const error = new HttpError(statusCode, message, data);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toEqual(data);
  });

  it('should handle missing data by defaulting to undefined', () => {
    const statusCode = 500;
    const message = 'Internal Server Error';

    const error = new HttpError(statusCode, message);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBeUndefined();
  });
});

// Tests for ValidationError
describe('ValidationError', () => {
  it('should correctly set the message', () => {
    const message = 'Invalid input';

    const error = new ValidationError(message);

    expect(error.message).toBe(message);
  });
});
