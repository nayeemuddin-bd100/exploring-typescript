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

// typescript object evaluate as a schema, if the schema's property is not found it wouldn't let us push any property in any object. so the following test property return an error.
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

/****************************************
 * ************************ Function
 *****************************************/

// we did not return anything, So myFunc return void . Here typescript return void but javascript return undefined.void and undefined are not same . void means nothing or anything and undefined evaluate as a data type
let myFunc = (a: number, b: number) => {
  console.log(a, b);
};
myFunc(1, 2);

// Here return data type count as number
let myFunc2 = (a: number, b: number, c: number = 0) => {
  return a + b;
};
myFunc2(1, 2, 3);

// We can explicitly declare the return data type
let myFunc3 = (a: number, b: number): number => {
  return a + b;
};
myFunc3(1, 2);

/************************************
 **************Type Aliases
 **************************************/
// we can write common type in separately.

type stringOrNum = string | number;
type userType = { name: string; email: string };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `User id is ${id}, user name is ${user.name} and user email is ${user.email}`
  );
};

/*************************************
 ********** Function Signature
 ***************************************** */
let add2: (a: number, b: number) => number;

// add2 = (a: number, b: number) => {
//   console.log(a + b)
//   // Here it's throwing error , cause we declared before the return type must be an number but we return nothing here. typescript takes void as return type in this case , so it occurred an error.
// };

add2 = (a: number, b: number) => {
  return a + b;
};

/*************************************
 ********** Classes
 ***************************************** */

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      `${this.name} is ${this.age} years old playing from ${this.country} `
    );
  }
}

const sakib = new Player("Shakib", 38, "Bangladesh");
sakib.play();
