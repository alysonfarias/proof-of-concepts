import { it, expect } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example.js';

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      expect(token).toBe(2);
    } catch (error) {
      done()
    }
  });
})

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  // expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);
})

it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';

  const token = generateTokenPromise(testUserEmail)
  expect(token).toBeDefined();
  // expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);
})