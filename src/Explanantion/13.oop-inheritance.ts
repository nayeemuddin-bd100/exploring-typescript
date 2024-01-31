// Inheritance

class StudentClass {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	makeSleep(hours: number): string {
		return `${this.name} is sleeping for ${hours} hours`;
	}
}

class TeacherClass {
	name: string;
	age: number;
	address: string;
	designation: string;

	constructor(name: string, age: number, address: string, designation: string) {
		this.name = name;
		this.age = age;
		this.address = address;
		this.designation = designation;
	}

	makeSleep(hours: number): string {
		return `${this.name} is sleeping for ${hours} hours`;
	}

	takeClass(numberOfClass: number): string {
		return `${this.name} is taking class ${numberOfClass}`;
	}
}

// here we can use extend class to inherit data

class ParentClass {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	makeSleep(hours: number): string {
		return `${this.name} is sleeping for ${hours} hours`;
	}
}

class StudentClass1 extends ParentClass {
	constructor(name: string, age: number, address: string) {
		super(name, age, address);
	}
}

const student1 = new StudentClass1("Nayeem", 34, "Dhaka");
// console.log(student1.makeSleep(5));

class TeacherClass1 extends ParentClass {
	designation: string;

	constructor(name: string, age: number, address: string, designation: string) {
		super(name, age, address);
		this.designation = designation;
	}

	takeClass(numberOfClass: number): string {
		return `${this.name} is taking class ${numberOfClass}`;
	}
}

const teacher1 = new TeacherClass1("Nayeem", 34, "Dhaka", "Teacher");
// console.log(teacher1.takeClass(5));
// console.log(teacher1.makeSleep(5));
