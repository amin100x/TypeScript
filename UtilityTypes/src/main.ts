// Utility Types :=  facilitate common type transformations.

// --------------------------- Partial --------------------------------------------------------
// Constructs a type with all properties of Type set to optional. 
// This utility will return a type that represents all subsets of a given type.

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// ------------------- Required and Readonly ----------------------------------------------
// Required :- Constructs a type consisting of all properties of Type set to required.
// Readonly :- the properties of the constructed type cannot be reassigned.

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc. 
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// assignVerified.grade = 'A' // not work because of readonly property 

// NOTE: assignVerified won't work with recordAssignment!
// recordAssignment(assignVerified) // not work because of readonly property
// Why? Try it and see what TS tells you :)
// => Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.

recordAssignment({ ...assignGraded, verified: true })

// -------------------------------- Record -------------------------------------------------------
// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}

// -------------------------------------------- Pick and Omit ----------------------------------------
// Pick :- picks the set of properties Keys from Type that we want to use .
// Omit :- opposite of pick it will remove keys

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}

// ------------------------------------------ Exclude and Extract ---------------------------------------
// Exclude :- Constructs a type by excluding from UnionType
// Extract :- opp. of Exclude, Constructs a type by extracting from Type

type adjustedGrade = Exclude<LetterGrades, "U"> // A,B,C,D 

type highGrades = Extract<LetterGrades, "A" | "B"> // only A,B

// ------------------------------------------------ Nonnullable ------------------------------------------
// Constructs a type by excluding null and undefined from Type.

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ----------------------------------------------- ReturnType ---------------------------------------------
// Constructs a type consisting of the return type of function Type.

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// ------------------------------------------------- Parameters ---------------------------------------------
// Constructs a tuple type from the types used in the parameters of a function type Type.

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// ------------------------------------------ Awaited ------------------------------------------------------
//  helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))