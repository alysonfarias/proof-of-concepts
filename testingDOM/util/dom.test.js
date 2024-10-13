// Import Vitest functions
import { describe, it, expect, beforeEach, vi } from 'vitest';

import fs from 'fs';
import path from 'path';

import { Window } from 'happy-dom';

// Import the showError function
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;

document.write(htmlDocumentContent);

vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
})

it('should add an error paragraph to the id="errors element', () => {
  showError('Test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
})

it('should not contain an error paragraph initially', () => {
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
})


it('should output the provided message in the error paragraph', () => {
  const testErrorMessage = 'Test'

  showError(testErrorMessage);

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMessage)
})

// // Set up a mock DOM environment before each test
// beforeEach(() => {
//   document.body.innerHTML = `
//     <div id="errors"></div>
//   `;
// });

// describe('showError', () => {
//   it('should display an error message in the errors container', () => {
//     const message = 'An error occurred';

//     // Call the function you want to test
//     showError(message);

//     // Get the updated DOM element
//     const errorContainerElement = document.getElementById('errors');
//     const errorMessageElement = errorContainerElement?.querySelector('p');

//     // Assert that the message was correctly inserted into the DOM
//     expect(errorMessageElement).toBeTruthy(); // Ensures <p> element exists
//     expect(errorMessageElement?.textContent).toBe(message); // Checks if the message matches
//   });

//   it('should clear previous error messages before displaying a new one', () => {
//     const previousMessage = 'Old error message';
//     const newMessage = 'New error occurred';

//     // Simulate an old error message
//     showError(previousMessage);

//     // Then show a new error message
//     showError(newMessage);

//     const errorContainerElement = document.getElementById('errors');
//     const errorMessageElements = errorContainerElement?.querySelectorAll('p');

//     // Assert that only one error message exists
//     expect(errorMessageElements?.length).toBe(1);
//     expect(errorMessageElements?.[0].textContent).toBe(newMessage);
//   });
// });
