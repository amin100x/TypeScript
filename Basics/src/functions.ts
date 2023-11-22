// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
// greet(42);

// Return Type
// Much like variable type annotations, 
//you usually don’t need a return type annotation because TypeScript will infer the function’s return type
// based on its return statements.The type annotation in the above example doesn’t change anything.
//Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes,
// or just for personal preference.
function getFavoriteNumber(): number {
    return 7;
}

// Functions Which Return Promises
async function getFavoriteNumber2(): Promise<number> {
    return 26;
}

// Anonymous Functions :- it can only be accessed by a variable it is stored in as a function.
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toUpperCase());
});

// add
const add = (x: number, y: number): number => {
    return x + y;
}

// we can also define type for the same parameters like all opration have same 2 parametre
type mathFun = (a: number, b: number) => number
// ================== OR ========================= both works same here
interface mathFun1 {
    (a: number, b: number): number
}

const sub: mathFun = (a, b) => {
    return a - b
}
const mult: mathFun = (a, b) => {
    return a * b
}
const div: mathFun = (a, b) => {
    return a / b
}

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') { return a + b + c }
    return a + b;
}
// Default paramter 
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}
console.log(sumAll(2, 5)); // 9
console.log(sumAll(undefined, 5));  // 17

// Rest Parameter :- accept any number of parameters
const total = (...nums: number[]) => {
    return nums.reduce((a, b) => a + b);
}
console.log(total(1, 2, 3, 4, 5));
console.log(total(1, 2, 3, 4, 5, 45, 6, 7, 8, 9));

// never return type :- when function return error
const Err = (errmsg: string): never => {
    throw new Error(errmsg)
}
// automatically type of this function become never
const infinate = () => {
    let i = 1;
    while (true) {
        i++;
    }
}

// custome type guard
const isNum = (a: any): boolean => {
    return typeof a === 'number' ? true : false
}