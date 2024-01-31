//key of guard

type AlphaNumeric = number | string;
const add1 = (params1: AlphaNumeric, params2: AlphaNumeric): AlphaNumeric => {
	if (typeof params1 === "number" && typeof params2 === "number") {
		return params1 + params2;
	} else {
		return params1.toString() + params2.toString();
	}
};

add1(1, 2);
add1("1", "2");

//in guard

// Type guard for checking if a value is a number
function isNumber(value: number | string): value is number {
	return typeof value === "number";
}

// Function to perform different operations based on the type
function performOperation(value: number | string): void {
	if (isNumber(value)) {
		// Inside this block, TypeScript knows that 'value' is a number
		console.log(value.toFixed(2));
	} else {
		// Inside this block, TypeScript knows that 'value' is a string
		console.log(value.toUpperCase());
	}
}

// Example usage
performOperation(42); // Output: 42.00
performOperation("hello"); // Output: HELLO
