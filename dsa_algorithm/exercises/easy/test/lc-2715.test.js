const cancellable = require('./../lc-2715');

describe('cancellable', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should execute fn after t milliseconds', () => {
        const mockFn = jest.fn((x) => x * 5);
        const cancelFn = cancellable(mockFn, [2], 20);
        jest.advanceTimersByTime(20);
        expect(mockFn).toHaveBeenCalledWith(2);
    });

    it('should cancel fn if cancelFn is called before t milliseconds', () => {
        const mockFn = jest.fn();
        const cancelFn = cancellable(mockFn, [], 100);
        cancelFn();
        jest.advanceTimersByTime(100);
        expect(mockFn).not.toHaveBeenCalled();
    });
});