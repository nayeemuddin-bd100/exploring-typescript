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
abstract class ElectronicDevice1 {
	// Abstract methods to be implemented by subclasses
	abstract powerOn(): void;
	abstract powerOff(): void;

	// Common method with a complete implementation
	pressRemoteButton(): void {
		console.log("Remote button pressed.");
	}
}

// Concrete subclass: TV
class TV1 extends ElectronicDevice1 {
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
class DVDPlayer1 extends ElectronicDevice1 {
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
const tv1 = new TV1();
tv1.powerOn();
tv1.volumeUp();
tv1.pressRemoteButton();

const dvdPlayer1 = new DVDPlayer1();
dvdPlayer1.powerOff();
dvdPlayer1.volumeDown();
dvdPlayer1.pressRemoteButton();

// const ac = new ElectronicDevice(); // Error: Cannot create an instance of an abstract class.

// Abstract with interface
