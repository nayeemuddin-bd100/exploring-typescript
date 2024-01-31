//when we need to work with dummy or fixed data then we can use static keyword
class MathOperations {
	static PI: number = 3.14;

	// Static method
	static calculateArea(radius: number): number {
		return this.PI * radius * radius;
	}
}

// Accessing static property
console.log(MathOperations.PI); // Output: 3.14

// Calling static method
const area = MathOperations.calculateArea(5);
console.log(area); // Output: 78.5
