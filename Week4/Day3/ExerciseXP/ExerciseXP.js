// function displayNumbersDivisible() {
//     let sum = 0
//     for (i = 0; i < 501; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// displayNumbersDivisible()

function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (i = 0; i < 501; i++) {
        if (i % divisor === 0) {
            console.log(i)
            sum += i
        }
    }
    console.log(sum)
}
// displayNumbersDivisible(3)
displayNumbersDivisible(45)

// Exercise 2 : Shopping List
// Instructions
const stock = { 
    'banana': 6, 
    'apple': 0,
    'pear': 12,
    'orange': 32,
    'blueberry':1
}  

const prices = {    
    'banana': 4, 
    'apple': 2, 
    'pear': 1,
    'orange': 1.5,
    'blueberry': 10
} 
let shoppingList = ['banana','orange','apple']
console.log(shoppingList)
    
function myBill() {
    sum = 0
    for (i = 0; i < shoppingList.length; i++){
        let item = shoppingList[i]
        if ( item in stock && stock[item]>0) {
            sum += prices[item]
            stock[item]-=1
        }
    }
    console.log(sum)
}
myBill()
console.log(stock)

// Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange=[]) {
    const quarter = 0.25;
    const dime = 0.10;
    const nickel = 0.05;
    const penny = 0.01;
    sum = 0
    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[0]*quarter +amountOfChange[1]*dime+ amountOfChange[2]*nickel + amountOfChange[3]*penny
        if (sum >= itemPrice) {
            console.log('true')
            return true
        }
        else
            console.log('false')
            return false
    }
}
changeEnough(4.25, [25, 20, 5, 0])
// changeEnough(14.11, [2,100,0,0])
// changeEnough(0.75, [0,0,20,5])

// Exercise 4 : Vacations Costs
function hotelCost(night) {
    night = prompt(`Enter the number of nights you will stay: `)
    while (Number(night) == 0 || isNaN (night)) {
        night = prompt(`Invalid input. Enter the number of nights you will stay: `)
    }
    let costNight = 140
    let total = Number(night) * costNight    
    console.log(total)
    return total 
}
// hotelCost()
 
function planeRideCost() {
    let destination = prompt(`Enter your destinatination: `)
    let cost = 0
    while (!destination || !isNaN(destination) || destination.trim() === "") {
        destination = prompt('Invalid input. Please enter a valid destination: ');
    }
    destination = destination.trim();
    if (destination === 'london') { return 183 }
    if (destination === 'paris') { return 220 }
    else 
        return 300
}
// console.log(`The cost of your plane ride is $${planeRideCost()}.`)

function rentalCarCost() {
    let car = prompt(`Enter the number of days you would like to rent a car: `)
    while (Number(car) == 0 || isNaN (car)) {
        car = prompt(`Invalid input. Enter the number of days you would like to rent a car: `)
    }
    let costCar = 0
    if (Number(car) <= 10) {
        costCar = Number(car) * 40
        return costCar
    }
    else
        costCar = Number(car) * 40 * 0.95
    return costCar
}
// console.log(rentalCarCost())

function totalVacationCost(){
    let hotel = hotelCost();
    let plane = planeRideCost();
    let rentCar = rentalCarCost();
    let vacation = hotel + plane + rentCar
    console.log(`Your vacation will cost ${vacation}.
    It includes the rental car: ${rentCar}, the stay in the hotel: ${hotel}, and the plane ticket: ${plane}.`)
}
totalVacationCost()

// Exercise 5 : Users
