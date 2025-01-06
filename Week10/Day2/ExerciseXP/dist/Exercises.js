"use strict";
//EX1
// let message: string = "Hello, World!"
// console.log(message);
//EX2
// let age: number = 0;
// age = 56;
// let nnn: string = "";
// nnn = "Arielle"
// console.log(age, nnn);
//EX3
// let id: string | number
// id = "jfgyubskbdnfvk";
// console.log(id);
// id = 123456789
// console.log(id)
// EX4
// const fct = (a: number):string => {
//     if (typeof a === 'number') {
//         return String(a)
//     }
//     return "error"
// }
// let a = 1
// console.log(typeof fct(a))
// console.log(fct(a));
//EX5
// const getDetails = (name: string, age: number): [string, number, string] => {
//   const greeting = `Hello, ${name}! You are ${age} years old.`;
//   return [name, age, greeting];
// };
// const details = getDetails("Alice", 25);
// console.log(details);
//EX6
// type PersonT = {
//     nom: string,
//     age: number,
// }
// const createPerson = (nom: string, age: number): PersonT =>{
//     return { nom, age };
// }
// const Person = createPerson ("Alice", 25)
// console.log(Person);
//EX7
const inputF = document.getElementById("inputField");
inputF.addEventListener("input", (event) => {
    const target = event.target;
    const value = target.value;
    // Display the value in the console and update the output element
    console.log(value);
});
