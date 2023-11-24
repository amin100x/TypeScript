"use strict";
class Coder {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}
// if we give access modifier to parameter of constructor then we don't need to first initialize outside
class Coder1 {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
    getAge() {
        return `i am ${this.age} years old`;
    }
}
// if we initialize variable with ! then we don't need to initialize it
class Coder2 {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}
