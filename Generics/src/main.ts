
const echo = <T>(arg: T): T => arg

// ------------------------------------------------------ 

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
console.log(isObj(true)) //false
console.log(isObj('John')) //false
console.log(isObj([1, 2, 3])) //false
console.log(isObj({ name: 'John' })) //true
console.log(isObj(null)) //false

// ---------------------------------------------------------

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false)) // false
console.log(isTrue(0)) // false
console.log(isTrue(true)) // true
console.log(isTrue(1)) // true
console.log(isTrue('Dave')) // true
console.log(isTrue('')) // false
console.log(isTrue(null)) // false
console.log(isTrue(undefined)) // false
console.log(isTrue({})) // modified false
console.log(isTrue({ name: 'Dave' })) // true
console.log(isTrue([])) // modified false
console.log(isTrue([1, 2, 3])) // true
console.log(isTrue(NaN)) // false
console.log(isTrue(-0)) // false

// use interface --------------------------------------------------------------------------

interface boolCheck<T> {
    value: T
    is: boolean
}
const isTrue2 = <T>(arg: T): boolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

// ---------------- extends interface -----------------------------------------------------

interface HasID {
    id: number
}
// now here user must have id property
const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here 
    return user
}
console.log(processUser({ id: 1, name: 'Dave' }))
//console.log(processUser({ name: 'Dave'}))


//-------------------------------------------------------------------------------------------


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))  // we will get auto suggestion for the second arg of this function by making this generics
console.log(getUsersProperty(usersArray, "username"))

//-------------------------------- generics in class -----------------------------------------------------

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Dave', 42, true]
console.log(myState.state)