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
