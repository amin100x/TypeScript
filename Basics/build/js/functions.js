"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Parameter type annotation
function greet(name) {
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
function getFavoriteNumber() {
    return 7;
}
// Functions Which Return Promises
function getFavoriteNumber2() {
    return __awaiter(this, void 0, void 0, function* () {
        return 26;
    });
}
// Anonymous Functions :- it can only be accessed by a variable it is stored in as a function.
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// add
const add = (x, y) => {
    return x + y;
};
const sub = (a, b) => {
    return a - b;
};
const mult = (a, b) => {
    return a * b;
};
const div = (a, b) => {
    return a / b;
};
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default paramter 
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 5)); // 9
console.log(sumAll(undefined, 5)); // 17
// Rest Parameter :- accept any number of parameters
const total = (...nums) => {
    return nums.reduce((a, b) => a + b);
};
console.log(total(1, 2, 3, 4, 5));
console.log(total(1, 2, 3, 4, 5, 45, 6, 7, 8, 9));
// never return type :- when function return error
const Err = (errmsg) => {
    throw new Error(errmsg);
};
// automatically type of this function become never
const infinate = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// custome type guard
const isNum = (a) => {
    return typeof a === 'number' ? true : false;
};
