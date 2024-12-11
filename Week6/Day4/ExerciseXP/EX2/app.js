import { person } from "./data.js";


let totalAge = 0
for (let i = 0; i < person.length; i++) { 
    totalAge += person[i].age;
}
const averageAge = totalAge / person.length;

console.log(averageAge);
