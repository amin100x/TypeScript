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
const dhoni = new Coder("MsDhoni", 42, "java, js, c++, rust");
const dhoni1 = new Coder1("MsDhoni", 42, "java, js, c++, rust");
const dhoni2 = new Coder2("MsDhoni", 42, "java, js, c++, rust");
console.log(dhoni1.getAge());
// inheritance
class WebDev extends Coder {
    constructor(name, age, skills, isBlockchainDev) {
        super(name, age, skills); // we must first call the super method before writtng anything if we inherite and initialize all the vari of super class
        this.isBlockchainDev = isBlockchainDev;
        this.isBlockchainDev = isBlockchainDev;
    }
    getSkills() {
        return this.skills;
    }
}
const Smith = new WebDev("S.Smith", 35, "blochchain Dev", true);
console.log(Smith.getSkills());
class Bowler {
    constructor(name, age, playerType) {
        this.name = name;
        this.age = age;
        this.playerType = playerType;
    }
    play() {
        return `${this.name} is ${this.playerType}`;
    }
}
const Amin = new Bowler("Amin", 21, "Bowl");
console.log(Amin.play());
// ============== static use =======================
class Peers {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peers.count;
    }
    getCount() {
        return Peers.count;
    }
}
Peers.count = 0;
const msd = new Peers("dhoni");
const msd1 = new Peers("dhoni1");
const msd2 = new Peers("dhoni2");
const msd3 = new Peers("dhoni3");
console.log(msd.id);
console.log(msd1.id);
console.log(msd2.id);
console.log(Peers.count);
// ================= getter Setter ==================
class Bank {
    constructor() {
        this.AccNo = 0;
        this.Tran = [];
    }
    get accNo() {
        return this.AccNo;
    }
    set accNo(accno) {
        this.AccNo = accno;
        return;
    }
    get trann() {
        return this.Tran;
    }
    set trann(tran) {
        if (Array.isArray(tran) && tran.every((e) => typeof e === 'number')) {
            this.Tran = tran;
            return;
        }
        else
            throw new Error("invalid parameter");
    }
}
const mahi = new Bank();
mahi.trann = [1000, 1500, 56656, 565];
console.log(mahi.trann);
mahi.trann = [...mahi.trann, 1000, 5000];
console.log(mahi.trann);
