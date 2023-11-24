// type are very useful for union and or"s
// can't be extended



interface Circle {
    radius: number
}
interface Sqr {
    side: number
}
interface Rectangle {
    width: number,
    hight: number
}

// Union
type Shape1 = Circle & Sqr & Rectangle;
// Or's
type Shape2 = Circle | Sqr | Rectangle; // now if we want to add any other shape we can directlty add it here

function renderShape(shape: Shape2) {
    console.log("Renderd!!");
}
function calArea(shape: Shape2) {
    console.log("calculated Area!!");
}
