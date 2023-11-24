
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

const dhoni = new Coder("MsDhoni", 42, "java, js, c++, rust");
const dhoni1 = new Coder1("MsDhoni", 42, "java, js, c++, rust");
const dhoni2 = new Coder2("MsDhoni", 42, "java, js, c++, rust");
console.log(dhoni1.getAge());


// inheritance
class WebDev extends Coder {

    constructor(name: string, age: number, skills: string, public isBlockchainDev: boolean) {
        super(name, age, skills) // we must first call the super method before writtng anything if we inherite and initialize all the vari of super class
        this.isBlockchainDev = isBlockchainDev
    }
    getSkills() {
        return this.skills
    }
}

const Smith = new WebDev("S.Smith", 35, "blochchain Dev", true);
console.log(Smith.getSkills());

// ========================= interface implementation ====================

interface Cricketer {
    name: string
    age: number
    playerType: "Bowl" | "Bat" | "All"
    play(action: string): string
}

class Bowler implements Cricketer {
    name: string
    age: number
    playerType: "Bowl" | "Bat" | "All"
    constructor(name: string, age: number, playerType: "Bowl" | "Bat" | "All") {
        this.name = name
        this.age = age
        this.playerType = playerType
    }
    public play(): string {
        return `${this.name} is ${this.playerType}`
    }
}
const Amin = new Bowler("Amin", 21, "Bowl");
console.log(Amin.play());

// ============== static use =======================

class Peers {
    static count: number = 0
    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peers.count
    }
    public getCount(): number {
        return Peers.count
    }
}

const msd = new Peers("dhoni")
const msd1 = new Peers("dhoni1")
const msd2 = new Peers("dhoni2")
const msd3 = new Peers("dhoni3")

console.log(msd.id);
console.log(msd1.id);
console.log(msd2.id);
console.log(Peers.count);

// ================= getter Setter ==================

class Bank {
    private AccNo: number
    private Tran: number[]

    constructor() {
        this.AccNo = 0
        this.Tran = []
    }

    public get accNo(): number {
        return this.AccNo
    }
    public set accNo(accno: number) {
        this.AccNo = accno
        return
    }
    public get trann(): number[] {
        return this.Tran
    }
    public set trann(tran: number[]) {
        if (Array.isArray(tran) && tran.every((e) => typeof e === 'number')) {
            this.Tran = tran
            return
        }
        else throw new Error("invalid parameter")
    }
}

const mahi = new Bank();
mahi.trann = [1000, 1500, 56656, 565]
console.log(mahi.trann);
mahi.trann = [...mahi.trann, 1000, 5000]
console.log(mahi.trann);
