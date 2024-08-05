import singletonCounter from './singleton'; // Replace with the correct path to your file
describe('Singleton Counter', () => {
    // it('should maintain a single instance', () => {
    //     expect(singletonCounter).toBeInstanceOf(Counter);

    //     // Attempting to create another instance should throw an error
    //     expect(() => new Counter()).toThrow('You can only create one instance!');
    // });

    it('should return the same instance via getInstance()', () => {
        expect(singletonCounter.getInstance()).toBe(singletonCounter);
    });

    it('should start with a count of 0', () => {
        expect(singletonCounter.getCount()).toBe(0);
    });

    it('should increment and decrement the count', () => {
        singletonCounter.increment();
        expect(singletonCounter.getCount()).toBe(1);

        singletonCounter.decrement();
        expect(singletonCounter.getCount()).toBe(0);

        singletonCounter.decrement();
        expect(singletonCounter.getCount()).toBe(-1);
    });
});
