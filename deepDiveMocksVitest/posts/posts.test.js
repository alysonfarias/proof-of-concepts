import { describe, expect, it, vi } from 'vitest';
import { extractPostData } from './posts';
import { validateNotEmpty } from '../util/validation.js';

const testTitle = 'Test title';
const testContent = 'Test content';

const testFormData = {
  title: testTitle,
  content: testContent,
  get(identifier) {
    return this[
      identifier
    ]
  }
}

vi.mock('../util/validation.js', () => ({
  validateNotEmpty: vi.fn(),
}));

vi.mock('../util/http.js', () => ({
  sendDataRequest: vi.fn(),
}));


describe('extractPostData()', () => {
  it('should extract title and content from the provided form data', () => {

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent)
  });

  it('should throw a ValidationError if title is empty', () => {
    const invalidFormData = {
      ...testFormData,
      title: '',
    };

    validateNotEmpty.mockImplementationOnce(() => {
      throw new Error('Validation Error');
    });

    expect(() => extractPostData(invalidFormData)).toThrow('Validation Error');
  });

  it('should throw a ValidationError if content is empty', () => {
    const invalidFormData = {
      ...testFormData,
      content: '',
    };

    validateNotEmpty.mockImplementationOnce(() => {
      throw new Error('Validation Error');
    });

    expect(() => extractPostData(invalidFormData)).toThrow('Validation Error');
  });
});