class AnimalClass {
	// public name: string;
	// public species: string;
	// public sound: string;

	// constructor(name: string, species: string, sound: string) {
	// 	this.name = name;
	// 	this.species = species;
	// 	this.sound = sound;
	// }

	// public makeSound() {
	// 	console.log(`The ${this.species} named ${this.name} says ${this.sound}`);
	// }

	// we can reduce  the code by using parameter properties
	//parameter properties
	constructor(
		public name: string,
		public species: string,
		public sound: string
	) {}

	public makeSound() {
		console.log(`The ${this.species} named ${this.name} says ${this.sound}`);
	}
}

const dog = new AnimalClass("German shepard", "Dog", "Gew gew");
const cat = new AnimalClass("Persian", "Cat", "Meaaaaaw");

dog.makeSound();
cat.makeSound();
