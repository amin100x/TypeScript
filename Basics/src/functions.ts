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