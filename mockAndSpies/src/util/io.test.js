import { expect, it, vi } from 'vitest'
import writeData from './io'
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    };
});

it('shoudl execute the writeFile methdo', () => {
    const testData = 'test';
    const testFileName = 'test.txt';
    writeData(testData, testFileName)

    expect(fs.writeFile).toBeCalled(testData, testFileName);
})
it('shoudl return a promise that resolves to no value if called correctly', () => {
    const testData = 'test';
    const testFileName = 'test.txt';

    // writeData(testData, testFileName)

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled(testData, testFileName);
})