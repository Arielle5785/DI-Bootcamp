// Exercise 1: Location
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//expected output: I am John Doe from Vancouver, Canada. Latitude (49.2827), longitude (-123.1207)

// Exercise 2: Display Student Info
// function displayStudentInfo(objUser) {
//     const { first, last } = objUser;
//     console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
//output : 'Your full name is Elie Schoppik'

// Exercise 3: User & id
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI: The number is their ID number.
// console.log(Object.entries(users));
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// const modifiedUsers = Object.entries(users)
// const newUsers = modifiedUsers.map(([key, value]) => [key, value * 2]);
// console.log(newUsers);

// Exercise 4 : Person class
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// expected result: Object

// Exercise 5 : Dog class
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

//  Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1 No. the setting of super(name) is missing
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
  // 2 Yes. 
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
  // 3 No. the constructor should include name too
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
  // 4 = No. the name is coming from the class Dog => super
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Exercise 6 : Challenges

// Evaluate these (ie True or False)

// [2] === [2] //False
// {} === {} //False
// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)//4: because object 2 refers to object1, the value of object1 = object2
// console.log(object3.number)//4: because object 3 refers to object2, the value of object1 = object2 = object3
// console.log(object4.number)//5: becuase it is another object, with the same value. object1 !=== object4

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(petName, type, color) {
        this.petName = petName;
        this.type = type;
        this.color = color
    }
};
// const myPet = new Animal('dog', 'Fluffy', 'brown');
// console.log(myPet);

class Mammal extends Animal {
    constructor(petName, type, color, sound) {
        super(petName, type,color);
        this.sound = sound
    }
};
// const myPet2 = new Mammal('dog', 'Fluffy', 'brown','barks');
// console.log(myPet2);

// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal('cow', 'Lily', 'brown and white', 'Moooo')
console.log(`${farmerCow.sound} I\'m a ${farmerCow.type}, named ${farmerCow.petName} and I\'m ${farmerCow.color}`);
