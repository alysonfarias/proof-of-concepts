// personFactory.js
import Person from './person.js';
export default class PersonFactory {
    constructor() {
        this.currentId = 0;
    }

    createPerson(name) {
        const person = new Person(this.currentId, name);
        this.currentId++;
        return person;
    }
}