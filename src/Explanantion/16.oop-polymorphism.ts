//Polymorphism is a concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. when an object can perform various task is called polymorphism

class Vehicle1 {
	constructor(public brand: string) {}

	start(): void {
		console.log(`Starting the ${this.brand}`);
	}
}

class Car1 extends Vehicle1 {
	// Overriding the start method for cars
	start(): void {
		console.log(`Starting the car: ${this.brand}`);
		console.log("Vroom! Vroom!");
	}
}

class Bicycle extends Vehicle1 {
	start(): void {
		console.log(`Starting the bicycle: ${this.brand}`);
		console.log("Pedaling...");
	}
}

const myCar1: Vehicle1 = new Car1("Toyota");
const myBicycle: Vehicle1 = new Bicycle("Schwinn");

myCar1.start();
myBicycle.start();
