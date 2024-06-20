class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    constructor() {
        this.currentId = 0;
    }

    createPerson(name) {
        const person = new Person(this.currentId, name);
        this.currentId++;
        return person;
    }
}
