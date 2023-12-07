// Union types

type Result = number | string;
const value: Result = 42; // or "Hello"


// Intersection Types:
// intersection type help to multiple types into a single type.
type AdminType = {
    isAdmin: boolean;
};
type UserType = {
    name: string;
};

type AdminUser = AdminType & UserType;
const adminUserEx: AdminUser = { name: "John", isAdmin: true };


// Mapped Type
// Mapped types in TypeScript provide a way to create new types by transforming the properties of an existing type. They allow you to iterate over the properties of a type and construct a new type based on those properties. Mapped types are often used for scenarios where you want to modify or augment the properties of an existing type in a generic and reusable way.

type Book = {
    title: string;
    author: string;
    pages: number;
};

// Mapped type to make all properties read-only
type ReadOnlyBook = {
    readonly [Key in keyof Book]: Book[Key];
};

const myBook: ReadOnlyBook = {
    title: "The TypeScript Guide",
    author: "John Developer",
    pages: 200,
};
// myBook.title = "Updated Title"; // Error: Cannot assign to 'title' because it is a read-only property.



// Interface vs type

// Use interface when:
// Defining the shape of objects.
// Extending other interfaces.

// Use type when:

// Creating union types (|), intersection types (&), or more complex types.
// Working with literal types.
// Working with mapped types.
