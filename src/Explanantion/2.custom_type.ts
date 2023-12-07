

/*=====  Custom data type  ======*/

// we can use custom data types by defining interfaces, type, or classes.

//Interface
interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
}

// Use the custom type
let myPerson: PersonInterface = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};



//Type
type PersonType = {
  name: string,
  age:number
};
let john: PersonType = {
    name : 'John',
    age : 30
};


//Classes
class Car {
    constructor(public make: string, public model: string, public year: number) {}
}

// Use the custom type
let myCar: Car = new Car('Toyota', 'Camry', 2022);
console.log(myCar);

