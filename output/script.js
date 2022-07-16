"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
// array
let text = ["Nayeem", "Saimun"];
// first one is string and second is will be boolean otherwise it evaluate as error
let text2 = ["Nayeem", false];
// string or boolean will be count otherwise error
let text3 = ["Nayeem", false];
// object
let person = {
    name: "John",
    age: 34,
    isCaptained: true,
};
// typescript object evaluate as a schema, if the schema's property is not found it didn't let us push any property in any object. so the following test property return an error.
// person.test = 'test'
// explicit type
let a;
let b = [];
// union type
let c;
let d = [];
// Here , array is also obtect.
let e;
e = [1, 2, 3];
// Dynamic type
let f;
f = "Nayeem";
f = 30;
let g = [];
g.push(1);
g.push("Hello, world!");
