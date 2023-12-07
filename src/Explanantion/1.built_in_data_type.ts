
/*=============================================
=     Typescript built in data type        =
=============================================*/

// Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
let fullName: string = `John Doe`;

//Union type

// A union type in TypeScript allows a variable, parameter, or property to have a value that belongs to one of several specified types. The union type is formed by using the | (pipe) character between the types.
let myVariable: number | string;
myVariable = 10;      // Valid
myVariable = "hello"; // Valid
// myVariable = true;   // Error: Type 'boolean' is not assignable to type 'number | string'

// Array

//Array with a Specific Data Type:
let numbersArr: number[] = [1, 2, 3, 4];
let namesArr: Array<string> = ["Alice", "Bob", "Charlie"];
let namesArr2: string[] = ["Alice", "Bob", "Charlie"];
// Array with Multiple Data Types (Union Types):
let mixedArray: (number | string)[] = [1, "two", 3, "four","five"];
let variedArray: (boolean | number | string)[] = [true, 42, "hello", false];
let anyArray: any[] = [1, "two", true];
// Tuple with a specific order of types
let tupleArr: [number, string, boolean] = [1, "hello", true];


//Tuple
// A tuple is a data structure in TypeScript that allows store ordered collections of elements of different types. Tuples are similar to arrays, but they have a fixed length and the type of each element is known at the specific position in the tuple. 
let tuple: [string, number] = ["hello", 10];
let tuple2: [string, number,boolean | string] = ["hello", 10, true ];

//Enum
// enum (short for enumeration) is a way to define a set of named constant values. Enums allow you to create a collection of related values with clear, human-readable names. This can make your code more expressive and self-documenting
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let today: DayOfWeek = DayOfWeek.Wednesday;
console.log(`Today is ${DayOfWeek[today]}`); // Output: Today is Wednesday

enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

function handleResponse(statusCode: HttpStatusCode) {
    if (statusCode === HttpStatusCode.OK) {
        console.log("Request successful");
    } else if (statusCode === HttpStatusCode.NotFound) {
        console.log("Resource not found");
    } else if (statusCode === HttpStatusCode.InternalServerError) {
        console.log("Internal server error");
    }
}
handleResponse(HttpStatusCode.OK); // Output: Request successful

enum UserRole {
    Admin,
    Moderator,
    User
}

function checkUserRole(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Admin privileges");
    } else if (role === UserRole.Moderator) {
        console.log("Moderator privileges");
    } else if (role === UserRole.User) {
        console.log("Standard user privileges");
    }
}

checkUserRole(UserRole.Admin); // Output: Admin privileges


// Any
// Any data type allows a variable to have any value.

let notSure: any = 4;
notSure = "maybe a string instead";

// Void
// Void data type represents the absence of a value.
function warnUser(): void {
	console.log("This is a warning message");
}

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

// Object
let obj1: object;
obj1 = { name: "foo", }

let Person1 : {
  name: string,
  age: number
}

Person1 = {
  name: "John",
  age: 42
}
let Person2 : {
  name: string,
  age?: number // here age is optional
}

Person2 = {
  name: "John",
}

