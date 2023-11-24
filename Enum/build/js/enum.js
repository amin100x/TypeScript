"use strict";
// help to define various versions of the Things
var Arithmatic;
(function (Arithmatic) {
    Arithmatic[Arithmatic["Add"] = 0] = "Add";
    Arithmatic[Arithmatic["Sub"] = 1] = "Sub";
    Arithmatic[Arithmatic["Mul"] = 2] = "Mul";
    Arithmatic[Arithmatic["Div"] = 3] = "Div";
})(Arithmatic || (Arithmatic = {}));
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Sqr"] = 1] = "Sqr";
    Shape[Shape["Rect"] = 2] = "Rect";
    Shape[Shape["Triangle"] = 3] = "Triangle";
})(Shape || (Shape = {}));
const fun = (a, b, type) => {
    console.log(type);
};
console.log(fun(12, 4, Arithmatic.Add)); // will print 0 , because enum returns indexs 
