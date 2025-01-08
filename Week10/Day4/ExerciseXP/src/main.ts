//EX1
// type PersonT = {
//     name: string,
//     age: number,
// }

// type AddressT = {
//     street: string,
//     city: string,
// }

// type PersonWithAddress = PersonT & AddressT

// const person1: PersonWithAddress = {
//     name : "Arielle",
//     age : 56,
//     street : "hashomer",
//     city : "Tel Aviv"
// }
// console.log(person1);

//EX2
// const describeValue = (value:number | string): string => {
//     if (typeof value === "number") {
//         return "this is a number";
// } return "this is a string";
// };
// console.log(describeValue(1));
// console.log(describeValue('a'));

//EX3
// type One = any
// type Two = string

// let castingValue: string = "abc"
// let someValue: any = '123'

// someValue = castingValue as Two
// console.log(typeof someValue);
// console.log(someValue);

//EX4
// function getFirstElement(arr: (number | string)[]): string {
//   return arr[0] as string;
// }

// console.log(getFirstElement(["hello", 42])); // Output: "hello"

//EX5
// const logLength = <T>(value: string | T[]): T|void => {
//     console.log(value.length);
// }

// logLength("hasdfghj");//8
// logLength([1, 2, 3, 4]);//4
// logLength(["a","b",1]);//3

//EX6
// type PersonT = {
//     name: string;
//     age: number;
// }
// type JobT = {
//     position: "Manager" | "Developer";
//     department: string;
// }
// type EmployeeT = PersonT & JobT

// let employee1: EmployeeT = {
//     name : "Arielle",
//     age : 56,
//     position : "Manager",
//     department : "IT"
// }

// let employee2: EmployeeT = {
//     name : "Jon",
//     age : 23,
//     position : "Developer",
//     department : "IT"

// }

// const describeEmployee = (employee:EmployeeT):string => {
//     if (employee.position === "Manager") {
//         return "Welcome to your managerial position"
//     }   return "Welcome to your new dev position"
// }

// console.log(describeEmployee(employee1));
// console.log(describeEmployee(employee2));

//EX7

// const formatInput = <T>(value: T): string =>{
//     if (typeof value !== "string") {
//         return String(value);
//     }
//     return value;
// }

// console.log(formatInput(123));        // Output: "123"
// console.log(typeof formatInput(123)); // string
// console.log(formatInput(true));       // Output: "true"
// console.log(typeof formatInput(true));// string
// console.log(formatInput("hello"));    // Output: "hello"
// console.log(typeof formatInput("hello"));// string
// console.log(formatInput([1, 2, 3]));  // Output: "1,2,3"
// console.log(typeof formatInput([1, 2, 3]));// string
