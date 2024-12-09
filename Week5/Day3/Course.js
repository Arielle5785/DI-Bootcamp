// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// let objArr = Object.entries(myObj)
// console.log(objArr);

// objArr.forEach(entry, index) => {
//     console.log(`The ${index + 1} key is ${entry[0]}.
//         The ${index+1}} value is ${entry[1]}`);
// }
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
