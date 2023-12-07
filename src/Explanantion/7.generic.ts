//  Generics in TypeScript provide a way  that can work with a variety of data types while maintaining type safety.

// with function
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const swappedNumbers = swap(1, 5);  // inferred type: [number, number]
const swappedNumbersString = swap<number | string>(1, "5");  // inferred type: [string, number]
const swappedStrings = swap("hello", "world");  // inferred type: [string, string]

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