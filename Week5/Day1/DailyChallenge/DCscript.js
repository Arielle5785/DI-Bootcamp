// Using this object :

let client = 'John';

const groceries = {
    fruits : ['pear', 'apple', 'banana'],
    vegetables: ['tomatoes', 'cucumber', 'salad'],
    totalPrice : '20$',
    other : {
        paid : true,
        meansOfPayment : ['cash', 'creditCard']
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// const displayGroceries = () => {
//     groceries.fruits.forEach(fruit => console.log(fruit))
//     ;
// }
// displayGroceries();

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)

const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    console.log(`Client: ${client}`); // Output: "Betty"
    console.log(`User: ${user}`);     // Output: "John"
    let shopping = groceries;
    shopping.totalPrice = '35$';
    shopping.other.paid = false;

    console.log(`Shopping totalPrice: ${shopping.totalPrice}`); // Output: "35$"
    console.log(`Groceries totalPrice: ${groceries.totalPrice}`); // Output: "35$"
    console.log(`Shopping paid: ${shopping.other.paid}`); // Output: false
    console.log(`Groceries paid: ${groceries.other.paid}`); // Output: false
};

cloneGroceries();
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// No, the client is Betty and the user remains John. Here it is a copy (2 memory places) not a reference.
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// yes, shopping is assigned to groceries. so this is a reference, if one changes, the other too.
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
// yes, like the previous point, shopping is assigned to groceries, it is a reference, not a copy. Therefore, it will change the value.

// results

// VM78:4 Client: Betty
// VM78:5 User: John
// VM78:10 Shopping totalPrice: 35$
// VM78:11 Groceries totalPrice: 35$
// VM78:12 Shopping paid: false
// VM78:13 Groceries paid: false