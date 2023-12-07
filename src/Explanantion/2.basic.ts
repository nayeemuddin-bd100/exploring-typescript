// 1.Syntax
// JavaScript
function greet(name) {
	return "Hello, " + name + "!";
}

// TypeScript with type annotation
function greetWithType(name: string): string {
	return "Hello, " + name + "!";
}


// 2.Variables:

// Variables in TypeScript can have explicit types. Here's an example:
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;


// 3.Data Type
// Standard data types
let count: number = 10;
let message: string = "Hello, TypeScript!";
let isActive: boolean = false;

// Custom type
type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: "Alice",
    age: 30,
};


// 4.Function
function add(a: number, b: number): number {
	return a + b;
}

let result: number = add(5, 3);

// 5.Array
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["John", "Alice", "Bob"];


// 6.Static typing
let age: number = 25;
age = "John"; // Error: Type 'string' is not assignable to type 'number'.
