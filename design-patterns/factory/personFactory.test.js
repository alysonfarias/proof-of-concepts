import PersonFactory from './personFactory';
import Person from './person'

describe('PersonFactory', () => {
    let factory;

    beforeEach(() => {
        factory = new PersonFactory(); // Use 'new' to create an instance
    });

    it('should create a new Person instance with the correct ID and name', () => {
        const person1 = factory.createPerson('Alice');
        expect(person1).toBeInstanceOf(Person);
        expect(person1.id).toBe(0);
        expect(person1.name).toBe('Alice');

        const person2 = factory.createPerson('Bob');
        expect(person2).toBeInstanceOf(Person);
        expect(person2.id).toBe(1);
        expect(person2.name).toBe('Bob');
    });

    it('should increment the ID for each new Person created', () => {
        const person1 = factory.createPerson('Alice');
        const person2 = factory.createPerson('Bob');
        const person3 = factory.createPerson('Charlie');

        expect(person1.id).toBe(0);
        expect(person2.id).toBe(1);
        expect(person3.id).toBe(2);
    });

    it('should start with ID 0 and increment sequentially', () => {
        expect(factory.currentId).toBe(0); // Check initial ID
        factory.createPerson('Alice');
        expect(factory.currentId).toBe(1);
        factory.createPerson('Bob');
        expect(factory.currentId).toBe(2);
    });
});