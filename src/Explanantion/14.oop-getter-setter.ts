class Person3 {
	private _age: number = 0;

	// Getter for the age property
	get age(): number {
		console.log("Getting age");
		return this._age;
	}

	// Setter for the age property
	set age(value: number) {
		if (value >= 0 && value <= 120) {
			console.log("Setting age");
			this._age = value;
		} else {
			console.log("Invalid age value");
		}
	}
}

const person3 = new Person3();

person3.age = 25; // Setting age

console.log(person3.age); // Getting age, Output: 25

// Trying to set an invalid age
person3.age = 150; // Invalid age value
