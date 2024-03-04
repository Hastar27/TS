class Person {
    name
    clazz
    subjects

    public setName(name: string) {
        this.name = name;
    }
    constructor(names : string, clazz:number, subjects: string[]) {
        this.name = names
        this.clazz = clazz
        this.subjects = subjects
    }
}
const person : Person = new Person("a", 1, ["a", "b"])
person.setName('x')
console.log(person.name)