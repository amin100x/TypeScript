// type  Aliases
type stringOrNum = string | number
type stringOrNumArray = stringOrNum[]


// Literals types
let myName: "Amin"
let userName: "amin08" | "dhoni7" | "mahi7781"  // only specific values can be assign to username
userName = 'mahi7781'


// Define the type of object
type Cricketer = {
    name: string,
    Number?: number,  // here ? is writtejn for define this property Optional 
    Finisher: boolean | number
}
// ----------------- OR ---------------- // Interfaces

// -------------------- Interface vs types ---------------------
// interfaces can be implemented by class but type can't
// interfaces can let you accumulate data of specific type
// interfaces can use other interfaces 
// interfaces can extends interfaces 
// types can do unions and intersections interface can't


interface Cricketer1 {
    name: string,
    Number?: number,  // here ? is written for define this property Optional 
    Finisher: boolean | number
}
class Msd implements Cricketer1 {
    name: string;
    Number: number;
    Finisher: boolean | number;
    constructor(name: string, Number: number, Finisher: boolean | number) {
        this.name = name,
            this.Number = Number,
            this.Finisher = Finisher
    }
}

// Actual create function
let msd: Cricketer = {
    name: "Dhoni",
    Number: 7,
    Finisher: true
}
let smith: Cricketer = {
    name: "Smith",
    Finisher: false
}
