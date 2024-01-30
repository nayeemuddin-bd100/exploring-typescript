// Conditional types in TypeScript allow create types that depend on a condition. They use the extends keyword to check a condition and determine the resulting type.

// type MyType<T> = T extends SomeType ? ResultType : OtherResultType;
type a1 = number;
type a2 = a1 extends number ? number : string;

type Vehicle = "Car" | "Bicycle" | "Motorcycle";

type Engine<T> = T extends "Car"
	? "V8"
	: T extends "Bicycle"
	? "Pedal"
	: "Unknown";

const carEngine: Engine<"Car"> = "V8"; // "V8"
const bicycleEngine: Engine<"Bicycle"> = "Pedal"; // "Pedal"
const motorcycleEngine: Engine<"Motorcycle"> = "Unknown"; // "Unknown"
