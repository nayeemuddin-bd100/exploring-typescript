// Function Declaration:

function add(x: number, y: number):number {
	return x + y;
}
console.log(add(1, 2))

// Function Expression
const subtract = function (x: number, y: number): number {
	return x - y;
};

// Optional and Default Parameters:
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Nayeem"));           // Output: Hello, Alice!
console.log(greet("Saiful", "Good day")); // Output: Good day, Bob!

// Rest Parameters:
function sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum([1, 2, 3])); // Output: 6

// Arrow Functions:
const power = (base: number, exponent: number): number => base ** exponent;

console.log(power(2, 3)); // Output: 8


