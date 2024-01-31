// Topics will cover here and oop from 12 to 16

// Class
// Inheritance:
// Static Members:
// Abstract Classes:
// Encapsulation:
// Access Modifiers: (public, private, protected)
// Interfaces with Classes:
// Readonly Properties:
// Getter and Setter Methods:
// Method Overriding:
// Polymorphism:
// Decorators:
// Generic Classes:

/*=============================================
=                Classes                =
=============================================*/
class PersonClass {
	// Properties
	firstName: string;
	lastName: string;
	age: number;

	// Constructor
	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	// Method
	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

// instance
let person1: PersonClass = new PersonClass("John", "Doe", 30);
// console.log(person1.firstName); // Output: John
// console.log(person1.getFullName()); // Output: John Doe

/*=====  Inheritance  ======*/
class Student extends PersonClass {
	studentId: number;

	constructor(
		firstName: string,
		lastName: string,
		age: number,
		studentId: number
	) {
		super(firstName, lastName, age);
		this.studentId = studentId;
	}

	//override - (will learn override keyword of ts)
	// getFullName(): string {
	// 	return `${this.firstName} ${this.lastName} student id is : ${this.studentId}`;
	// }

	studentInfo(): string {
		return `Hi , this is ${this.firstName} ${this.lastName}, My age is ${this.age} and My studentId is ${this.studentId}`;
	}
}

let stu1: Student = new Student("Saiful", "Islam", 25, 345213542435);
console.log(stu1.getFullName());
console.log(stu1.studentInfo());

/*=============================================
=            Abstract Classes            =
=============================================*/

// Abstract class helps to hide implementation

// Abstract class is a blueprint for other classes.

// Can't create an object or instance directly from abstract class.

// In subclass we must have to use abstract methods in subclass

// Abstract classes Can have fully implemented methods for direct use or override.

// Your blueprint might also have general instructions that apply to all (subclass) vehicles, like how to turn on the lights or how to brake.

// The blueprint(abstract class) ensures that all (subclasses) vehicles have certain common elements, like wheels and a steering mechanism.

// Abstract class
abstract class ElectronicDevice {
	// Abstract methods to be implemented by subclasses
	abstract powerOn(): void;
	abstract powerOff(): void;

	// Common method with a complete implementation
	pressRemoteButton(): void {
		console.log("Remote button pressed.");
	}
}

// Concrete subclass: TV
class TV extends ElectronicDevice {
	powerOn() {
		console.log("TV powered on.");
	}

	powerOff() {
		console.log("TV powered off.");
	}

	volumeUp() {
		console.log("TV volume increased.");
	}
}

// Concrete subclass: DVDPlayer
class DVDPlayer extends ElectronicDevice {
	powerOn() {
		console.log("DVD player powered on.");
	}

	powerOff() {
		console.log("DVD player powered off.");
	}
	volumeDown() {
		console.log("DVD player volume decreased.");
	}
}

// Usage
const tv = new TV();
tv.powerOn();
tv.volumeUp();
tv.pressRemoteButton();

const dvdPlayer = new DVDPlayer();
dvdPlayer.powerOff();
dvdPlayer.volumeDown();
dvdPlayer.pressRemoteButton();

// const ac = new ElectronicDevice(); // Error: Cannot create an instance of an abstract class.

/*=================================================
=  Access Modifiers: (public, private, protected)  =
==================================================*/

// Public (public):

//Members marked as public are accessible from anywhere, both within the class and from external code.If you do not specify an access modifier, it is considered public by default.

class PublicExample {
	public myProperty: string;

	constructor() {
		this.myProperty = "Hello, World!";
	}
}

const PublicExampleOne = new PublicExample();
console.log(PublicExampleOne.myProperty); // Accessing public property

// Private (private):
// Members marked as private are only accessible within the class that defines them. They cannot be accessed from outside the class.
class PrivateExample {
	private myProperty: string;

	constructor() {
		this.myProperty = "Hello, World!";
	}

	private myMethod() {
		console.log("This is a private method.");
	}
}

const PrivateExampleOne = new PrivateExample();
// These will result in errors
// console.log(PrivateExampleOne.myProperty); // Error: Property 'myProperty' is private
// PrivateExampleOne.myMethod(); // Error: Property 'myMethod' is private

// Protected (protected):
// Members marked as protected are accessible within the class that defines them and subclasses.

class Parent {
	protected myProperty: string;

	constructor() {
		this.myProperty = "Hello, World!";
	}
}

class Child extends Parent {
	public accessProtected() {
		console.log(this.myProperty); // Accessing protected property
	}
}

const ProtectedExampleOne = new Child();
ProtectedExampleOne.accessProtected(); // Accessing protected property from a subclass

// Grant example
class Member {
	private firstName: string;
	private lastName: string;
	protected age: number;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	// Public method
	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	// Protected method to check if the person is an adult
	protected isAdult(): boolean {
		return this.age >= 18 ? true : false;
	}
}

// subclass
class Employee extends Member {
	private employeeId: number;

	constructor(
		firstName: string,
		lastName: string,
		age: number,
		employeeId: number
	) {
		super(firstName, lastName, age);
		this.employeeId = employeeId;
	}

	// Public method to get employee information
	public getEmployeeInfo(): string {
		// Accessing protected member from the parent class
		const adultStatus = this.isAdult() ? "adult" : "minor";

		return `Employee ID: ${
			this.employeeId
		}, Name: ${this.getFullName()}, Age: ${this.age} (${adultStatus})`;
	}
}

const karim = new Employee("Karim", "Rahman", 25, 12345);

// Accessing public method
console.log(karim.getFullName()); // Output: Karim Rahman
console.log(karim.getEmployeeInfo());
// Output: Employee ID: 12345, Name: Karim Rahman, Age: 25 (adult)

// Accessing protected/private method
// console.log(karim.firstName); // Error: Property 'firstName' is private
// console.log(karim.age); // Error: Property 'age' is protected
