let stringArr = ["one", "two", "three"]  // string arr

let strNumArr = ["dhoni", "smith", 7, 49]  // string | number

let mixedArr = ["Dhoni", 7, true] // string | number | boolean

// stringArr[0] = 7  // can't assign number value becaouse of only str arr
strNumArr[0] = 7 // can assign
mixedArr[0] = false // can assign

// stringArr = strNumArr // can't because of strNumArr can be strong | number
strNumArr = stringArr // can...

let AnyTypeArr = [] // any type
let StrTypeArr: string[] = [] // string type array, now can only push string data 
StrTypeArr.push("Mahi7")





