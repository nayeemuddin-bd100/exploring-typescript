// Interface Declaration
// Readonly Properties:
// Function Signatures in Interfaces:
// Extending Interfaces:
// Implementing Interfaces in Classes:
// Declaration Merging:


/*=====  Interface declaration  ======*/
interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
}

const nesar : IPerson = {
	firstName: "Nesarul",
	lastName: "Hoque",
	age: 26,
};

/*=====  Readonly Properties  ======*/
// readonly properties in interfaces cannot be changed after assign.

interface AppConfig {
	readonly appName: string;
	readonly apiUrl: string;
	readonly maxRequestsPerMinute: number;
}
const appConfig: AppConfig = {
	appName: "MyApp",
	apiUrl: "https://api.example.com",
	maxRequestsPerMinute: 100,
};
// appConfig.appName = "NewApp"; // Error: Cannot assign to 'appName' because it is a read-only property.

//usage
function fetchData(): void {
	console.log(`Fetching data from ${appConfig.apiUrl}`);
}



/*=====  Function in interface  ======*/

// Function Signatures
interface MathOperation {
	(x: number, y: number): number;
}

const addNum: MathOperation = (x,y) => x + y;
const subNum: MathOperation = (x,y) => x - y;

// console.log(addNum(1,2)) //3
// console.log(subNum(3, 1)); // 1

/*=====  Extending interface  ======*/

interface User {
    username: string;
    email: string;
}

// Interface for an administrator, extending the User interface
interface Admin extends User {
    adminLevel: number;
    grantAdminRights(): void;
}

// Implementation of a regular user
const regularUser: User = {
    username: "john_doe",
    email: "john@example.com",
};

// Implementation of an administrator
const adminUser: Admin = {
    username: "admin_jane",
    email: "admin@example.com",
    adminLevel: 2,
    grantAdminRights: () => {
        console.log("Admin rights granted!");
    },
};

// Functions that accept User or Admin objects
function displayUserInfo(user: User): void {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
}

function performAdminActions(admin: Admin): void {
    console.log(`Admin Level: ${admin.adminLevel}`);
    admin.grantAdminRights();
}

displayUserInfo(regularUser);
performAdminActions(adminUser);

/*=====  Implementing Interfaces in Classes  ======*/

interface CarInterface {
    brand: string;
    model: string;
    start(): void;
    stop(): void;
}
class ElectricCar implements CarInterface {
    brand: string;
    model: string;

    // Additional property specific to ElectricCar
    batteryCapacity: number;

    constructor(brand: string, model: string, batteryCapacity: number) {
        this.brand = brand;
        this.model = model;
        this.batteryCapacity = batteryCapacity;
    }

    start(): void {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
    stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}

const Toyota = new ElectricCar("Toyota", "AC750", 20000)
// Toyota.start() // Toyota AC750 is starting...
// Toyota.stop() // Toyota AC750 is stopping...


// Extend in interfaces is used to create new interfaces that inherit properties or methods from existing interfaces. It's not about implementation but about structure and contract.

// in classes is used for inheritance. A subclass can inherit properties and methods from a base class (superclass).


/*=====  Declaration Merging  ======*/

// Initial interface declaration
interface UserInterface {
    name: string;
    age: number;
}

// Declaration merging to add more details to the User interface
interface UserInterface {
    email: string;
    isAdmin?: boolean;
}

const userOne: UserInterface = {
	name: "Didarul Alam",
	age: 25,
	email: "didar@gmail.com",
	isAdmin: false,
};
console.log(userOne);
