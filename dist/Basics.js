class Person {
    name;
    clazz;
    subjects;
    setName(name) {
        this.name = name;
    }
    constructor(names, clazz, subjects) {
        this.name = names;
        this.clazz = clazz;
        this.subjects = subjects;
    }
}
const person = new Person("a", 1, ["a", "b"]);
person.setName('x');
console.log(person.name);
