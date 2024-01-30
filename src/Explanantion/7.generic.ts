//  Generics in TypeScript provide a way  that can work with a variety of data types while maintaining type safety.

// with function
function swap<T>(a: T, b: T): [T, T] {
	return [b, a];
}

const swappedNumbers = swap(1, 5); // inferred type: [number, number]
const swappedNumbersString = swap<number | string>(1, "5"); // inferred type: [string, number]
const swappedStrings = swap("hello", "world"); // inferred type: [string, string]

const createArr = (params: string): string[] => {
	return [params];
};

const createArr2 = <T>(params: T): T[] => {
	return [params];
};

const res1 = createArr2<string>("hello");
const res2 = createArr2<boolean>(false);

// with interface
interface Pair<T, U> {
	first: T;
	second: U;
}

const numberStringPair: Pair<number, string> = { first: 42, second: "hello" };
const stringBooleanPair: Pair<string, boolean> = {
	first: "world",
	second: true,
};

// Using 'extends' to enforce a constraint on the generic type
function printName<T extends { name: string }>(obj: T): void {
	console.log(obj.name);
}

// Valid usages
printName({ name: "John" });
printName({ name: "Jane", age: 25 });

// Error: Argument of type '{ age: number }' is not assignable to parameter of type '{ name: string; }'
// printName({ age: 30 });

// Generic Constraint: T extends { name: string } means that T must be a type that extends or has at least the properties of { name: string }.

// keyof
type PersonType1 = {
	name: string;
	age: number;
	address: string;
};

type newType = "name" | "age" | "address";

// we can do it using keyof
type newTypeUsingKeyOf = keyof PersonType1;

const nameKey: newType = "name";
const nameKey2: newTypeUsingKeyOf = "name";

// with class
class Box<T> {
	private value: T;

	constructor(value: T) {
		this.value = value;
	}

	getValue(): T {
		return this.value;
	}
}

const numberBox = new Box(42); // inferred type: Box<number>
const stringBox = new Box("hello"); // inferred type: Box<string>

const numberValue: number = numberBox.getValue();
const stringValue: string = stringBox.getValue();

// ******************************* //

class ArrayUtility<T> {
	private items: T[] = [];

	addItem(item: T): void {
		this.items.push(item);
	}

	getItems(): T[] {
		return this.items;
	}
}

const numberArrayUtility = new ArrayUtility<number>();
numberArrayUtility.addItem(1);
numberArrayUtility.addItem(2);
numberArrayUtility.addItem(3);

console.log(numberArrayUtility.getItems()); // [1, 2, 3]

// for strings
const stringArrayUtility = new ArrayUtility<string>();
stringArrayUtility.addItem("apple");
stringArrayUtility.addItem("banana");
stringArrayUtility.addItem("orange");

console.log(stringArrayUtility.getItems()); // ["apple", "banana", "orange"]
