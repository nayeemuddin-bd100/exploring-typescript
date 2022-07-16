function add(a: number, b: number) {
  return a + b;
}

console.log(add(5, 3));

// array
let text: string[] = ["Nayeem", "Saimun"];

// first one is string and second is will be boolean otherwise it evaluate as error
let text2: [string, boolean] = ["Nayeem", false];

// string or boolean will be count otherwise error
let text3: (string | boolean)[] = ["Nayeem", false];

// object
let person = {
  name: "John",
  age: 34,
  isCaptained: true,
};

// typescript object evaluate as a schema, if the schema's property is not found it didn't let us push any property in any object. so the following test property return an error.
// person.test = 'test'

// explicit type

let a: string;
let b: string[] = [];

// union type

let c: string | number;
let d: (string | number)[] = [];

// Here , array is also obtect.
let e: object;
e = [1, 2, 3];

// Dynamic type
let f: any;
f = "Nayeem";
f = 30;

let g: any[] = [];
g.push(1);
g.push("Hello, world!");
