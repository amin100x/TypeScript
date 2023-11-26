"use strict";
const echo = (arg) => arg;
// ------------------------------------------------------ 
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); //false
console.log(isObj('John')); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: 'John' })); //true
console.log(isObj(null)); //false
// ---------------------------------------------------------
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false)); // false
console.log(isTrue(0)); // false
console.log(isTrue(true)); // true
console.log(isTrue(1)); // true
console.log(isTrue('Dave')); // true
console.log(isTrue('')); // false
console.log(isTrue(null)); // false
console.log(isTrue(undefined)); // false
console.log(isTrue({})); // modified false
console.log(isTrue({ name: 'Dave' })); // true
console.log(isTrue([])); // modified false
console.log(isTrue([1, 2, 3])); // true
console.log(isTrue(NaN)); // false
console.log(isTrue(-0)); // false
