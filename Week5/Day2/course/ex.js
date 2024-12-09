// function showProps(obj, objName) {
//   let result = '';
//   for (let i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//   }
//   return result;
// }

// // showProps(myCar, "myCar")
// myCar.make = Ford
// myCar.model = Mustang
// myCar.year = 1969

// for (for let thing in myCar) {
//     console.log(myCar[thing]);
// }

// const numbers = [10, 11, 12, 15, 20];
// numbers.forEach(number => {
//     if (number %2 === 0) {
//         console.log(number);
//     }
// })
// const words = ["wow", "hey", "bye"];
// words.some (word =>word.startsWith('h'))

// const words2 = ["hello", "hey", "hola"];
// words2.every(word => word.startsWith('h'))
// console.log(words);

const firstArr = [1, 4, 9, 16];

// pass a function to map
const secondArr = firstArr.map((value, index) => value * 2);
// array passed : firstArr
// transformation passed : value * 2

console.log(secondArr);
// expected output: [2, 8, 18, 32]

myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length <= 5);
// array passed : words
// test passed : word.length > 6

console.log(result);
// expected output: ["exuberant", "destruction", "present"]

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]
let newParty = party.reduce((acc, val) => 
    if (val.desert == 'Apple Pie') {
        acc + 0
    }
    else {
        return acc + val.calories
    }, 0)
;
console.log(newParty);
