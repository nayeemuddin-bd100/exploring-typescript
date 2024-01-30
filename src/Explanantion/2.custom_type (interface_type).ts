/*=====  Custom data type  ======*/

// we can use custom data types by defining interfaces, type, or classes.

//Interface
interface PersonInterface {
	firstName: string;
	lastName: string;
	age: number;
}

// Use the custom type
let myPerson: PersonInterface = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
};

//Type
type PersonType = {
	name: string;
	age: number;
};
let john: PersonType = {
	name: "John",
	age: 30,
};

//Classes
class Car {
	constructor(public make: string, public model: string, public year: number) {}
}

// Use the custom type
let myCar: Car = new Car("Toyota", "Camry", 2022);
console.log(myCar);

// interface vs type
//  When we want to work with object typw then we should use interface, and for primitive type we should use type.

//in interface we can extend multiple interfaces.

// Type
// Working with Union and Intersection Types:
type Dog = {
	name: string;
	breed: string;
};

type Cat = {
	name: string;
	color: string;
};

type Pet = Dog | Cat; // Union type
type Animal = Dog & Cat; // Intersection type
