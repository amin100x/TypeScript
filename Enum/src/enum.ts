// help to define various versions of the Things


enum Arithmatic {
    Add,
    Sub,
    Mul,
    Div
}
type Arithmatic1 = "add" | "sub" | "mul" | "div" // can also write like this, but its become complex and can cause spelling error but in emun we have autocomplete

enum Shape {
    Circle,
    Sqr,
    Rect,
    Triangle
}


const fun = (a: number, b: number, type: Arithmatic) => {
    console.log(type);
}

console.log(fun(12, 4, Arithmatic.Add)); // will print 0 , because enum returns indexs 
