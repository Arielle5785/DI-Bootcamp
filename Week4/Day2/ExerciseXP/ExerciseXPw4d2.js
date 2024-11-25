// Exercise 1: List of People
// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
let deletedItem = people.splice(0, 1)
console.log(people)

// Write code to replace “James” to “Jason”.
const people = ["Greg", "Mary", "Devon", "James"];
let deletedItem = people.splice(0, 1)
let replaceItem = people.pop()
let addItem = people.push('Jason')
console.log(people)

// Write code to add your name to the end of the people array.
people.push('Arielle')
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const people = ["Mary", "Devon", "Jason", "Arielle"];
let newPeople = people.slice(1)
console.log(newPeople)
console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
const people = ["Mary", "Devon", "Jason", "Arielle"];
console.log(people.indexOf('Foo'));
// It returns -1 because 'Foo' is not part of the array.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
const people = ["Mary", "Devon", "Jason", "Arielle"];
let last = people[people.length-1]
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
const people = ["Mary", "Devon", "Jason", "Arielle"];
for (let i = 0; i < people.length; i++) {
    let item = people[i];
    console.log(item);
    }

// Exercise 2 : Your favorite colors
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
const people = ["Mary", "Devon", "Jason", "Arielle"];
for (let i = 0; i < 2; i++) {
    let item = people[i];
    console.log(item);
    }
// Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let userNumber = prompt('Enter a number: ')
console.log(typeof(userNumber))
return string

// While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation ?

let userNumber = prompt("Enter a number: ");
while (userNumber < 10) {
    userNumber = prompt(`Enter a new number,
        we\'ll keep asking until the number is greater than 10: `);
}
console.log(`You have entered ${userNumber}, it is bigger than 10.`)

// Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review about objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`The second tenant ${building.nameOfTenants[1]} has an apartement of ${building.numberOfRoomsAndRent.dan[0]}`)

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
if (sarahRent + davidRent > danRent) {`New Dan\'s rent is ${building.numberOfRoomsAndRent.danRent = 1200}` }
else { console.log(`Dan\'s rent is the same : ${building.numberOfRoomsAndRent.danRent}`) };


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    father: 'Francis',
    mother: 'Jacqueline',
    eldest: 'Laetitia',
    youngest: 'Arielle'

}
// Using a for in loop, console.log the keys of the object.
console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

// Using a for in loop, console.log the values of the object.
console.log("Values of the family object:");
for (let key in family) {
    console.log(family[key]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”: 
// TA I couldn't do it in one line, but the result is in 3.
for (let key in details) {
    console.log(`${key} ${details[key]}`)
};

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
sortedNames = names.sort();
for (let i = 0; i < sortedNames.length; i++) { acronym += sortedNames[i][0] };
console.log(acronym)


