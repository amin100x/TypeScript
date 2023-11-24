
class Coder {
    // here we must first define this variables and must initialize it in constructor
    name: string
    age: number
    skills: string
    constructor(name: string, age: number, skills: string) {
        this.name = name
        this.age = age
        this.skills = skills
    }
}

// if we give access modifier to parameter of constructor then we don't need to first initialize outside
class Coder1 {
    constructor(public name: string, private age: number, protected skills: string) {
        this.name = name
        this.age = age
        this.skills = skills
    }
    public getAge() {
        return `i am ${this.age} years old`
    }
}

// if we initialize variable with ! then we don't need to initialize it
class Coder2 {
    lang!: string
    name: string
    age: number
    skills: string
    constructor(name: string, age: number, skills: string) {
        this.name = name
        this.age = age
        this.skills = skills
    }
}

