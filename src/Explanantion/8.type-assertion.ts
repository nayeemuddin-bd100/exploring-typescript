// type assertion is a way to tell the compiler that you know more about the type of a value than the compiler does. It's like a way of saying, "Trust me, I know what I'm doing.

let someValue: any = "Hello, TypeScript!";

// If  i want to find any string method with (.) notation , vs code won't suggest any string method , but whenever i use as string i can find each string method.

// (<string>someValue).length;
(someValue as string).toLowerCase();

console.log(someValue);
