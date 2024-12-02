// Exercise 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const choices = colors.map((value, index) => `\#${index + 1} choice is ${value}`);
// console.log(choices);

// if (colors.includes('Violet')) {
//      console.log('Yeah');
// } else {'No...'
// }


// Exercise 2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//     colors[index] < 3 ? console.log(`${index + 1}${ordinal[index+1]} ${color}`) : console.log(`${index + 1}${ordinal[0]} ${color}`)
//  });

// Exercise 3

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
//expected result : ['bread' , 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// ------2------
// const country = "USA";
// console.log([...country]);
//exepected result : ['USA'] wrong: it is dis
//['U', 'S' ,'A']
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
//expected result :[ undefined , undefined ]

// // Exercise 4 : Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
// console.log(welcomeStudents);

// Using the filter() method, create a new array, containing only the Full Stack Residents.

// const newResidents = users.filter(user => user.role === 'Full Stack Resident');
// console.log(newResidents)

// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

// const newResidents = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
// console.log(newResidents)

// Exercise 5 : Star Wars
// Using this array
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
// const epicString = epic.reduce((acc, value) => acc +' '+ value);
// console.log(epicString);

// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
               {name: "Jamie", course: "Big Data", isPassed: false }];
               
// const studentsPassed = students.filter(student => student.isPassed);
// console.log(studentsPassed);

// Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const studentsPassed =
    students.filter(student => student.isPassed).forEach(student => {console.log(`Good job ${student.name}, you have succesfully passed the course in ${student.course}.`)});



