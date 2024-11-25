// Exercise 1: List of People
// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
// const people = ["Greg", "Mary", "Devon", "James"];
// let deletedItem = people.splice(0, 1)
// console.log(people)

// Write code to replace “James” to “Jason”.
// const people = ["Greg", "Mary", "Devon", "James"];
// let deletedItem = people.splice(0, 1)
// let replaceItem = people.pop()
// let addItem = people.push('Jason')
// console.log(people)

// Write code to add your name to the end of the people array.
// people.push('Arielle')
// console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// const people = ["Mary", "Devon", "Jason", "Arielle"];
// let newPeople = people.slice(1)
// console.log(newPeople)
// console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
// const people = ["Mary", "Devon", "Jason", "Arielle"];
// console.log(people.indexOf('Foo'));
// It returns -1 because 'Foo' is not part of the array.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// const people = ["Mary", "Devon", "Jason", "Arielle"];
// let last = people[people.length-1]
// console.log(last)