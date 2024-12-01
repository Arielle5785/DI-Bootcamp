// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne()
//the code is setting up a function called funcOne with no parameters.
//what does the function: if the variable, defined in the function but out of the loop,
//is more than 1, then a pop up/alert displays the message `inside the funcOne function ${a}`.
//the value of a is equal 3, since the variable defined line 3 is equal to 5, greater than 1, so the value equals 3.
//reason why calling the function funcOne() pops the message `inside the funcOne function 3`
// #1.2 What will happen if the variable is declared 
// with const instead of let ? error: since the variable in line 5 is given another value, the code would probably reject the const.

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree() // pop up message `inside the funcThree function 0` since the variable is declared line 21, with value 0.
// funcTwo() // set the value of the variable a to 5, but doesn't print or display any result (no return, no console) 
// funcThree() // now the value of a taken into account is 5 since line 32. so the message that pops up is `inside the funcThree function 5`
// #2.2 What will happen if the variable is declared 
// with const instead of let ? funcThree() line 31 runs as previously described. then the funcTwo runs, but generates an error since now a is a constant/fixed value, not changeable.


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()// assign a as a global value, since it is an attribute of window, an object. it is value is 'hello'
// funcFive()//pops up the message `inside the funcFive function hello` since it is defined gloablly and no other value has been assigned.

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()// pops up the message `inside the funcSix function test` because the code is setting the value a = 1 using let, but the function assigns a 'new' string value test. in JS there is no impact of data type change number to string, since let was used.
// #4.2 What will happen if the variable is declared with const instead of let ? 
//If a is declared with const on line 53, it does not affect the behavior inside the function. The function will use the value of a declared on line 55, as the scope of the variable on line 55 is closer to the function's execution context.In this scenario, declaring a as const on both line 53 and line 55 will yield the same result since the function consistently references the value of a from line 55.


//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//the first alert (line 70) displays `in the if block 5`.
// then the second alert pops up, (line 72) and take into account the global scope, not the functional scope, and the message is`outside of the if block 2`
// The condition if (true) always evaluates to true, so the block of code inside the if statement is executed. The use of let ensures that the variable a inside the block does not interfere with the a in the global scope.

// #5.2 What will happen if the variable is declared with const instead of let ? same result.

// Exercise 2 : Ternary operator
// Instructions
// Using the code below:

// function winBattle(){
    // return true;
// }
// Transform the winBattle() function to an arrow function.
// const winBattle = () => true;
    
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// let experiencePoints = winBattle()? 10 : 1
// console.log(experiencePoints);

// Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// const isString = (a) => typeof(a) === 'string';

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let numbSum = (x, y) => x + y;
// console.log(numbSum(4,5));

// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
  
// First, use function declaration and invoke it.
// function convertKgFx(Kg) {
    // return Kg * 1000;  
// }
// convertKgFx(72);

// Then, use function expression and invoke it.
// const convertKgFx2 = function (Kg) { return Kg * 1000 };
// convertKgFx2(72);
// Write in a one line comment, the difference between function declaration and function expression. The Function declaration is setting up a function while the function expression is assigned to a constant.

// Finally, use a one line arrow function and invoke it.
// let convertKg = (Kg) => `${Kg * 1000} gr`;
// console.log(convertKg(72));
// Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function fortuneTeller (numbChildren, partnerName, geoLocation, jobTitle){
//     const fortune =  `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numbChildren} kids.`
//     document.getElementById('EX6').innerText = fortune;
// })(4,'Eli','Singapore','COO')

// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// (function navBar(userName) {
//     document.getElementById('NavBar').innerHTML = `
//         <div id ='userProfile'>
//             <img src="https://via.placeholder.com/80" alt="${userName}'s profile picture">
//                 ${userName}
//         </div>
//     `;
// })('John');
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// function makeJuice(drinkSize) {
//     function addIngredients(firstIng, secIng, thirdIng) {
//         const order = document.getElementById('output');
//         output.textContent = `The client orders a ${drinkSize} size drink, a juice composed by ${firstIng}, ${secIng}, and ${thirdIng}.`
//     }
//     addIngredients ('apples', 'grapes','orange')
// }
// makeJuice('medium')

// Part II:
// In the makeJuice function, create an empty array named ingredients.
function makeJuice(drinkSize) {
    var ingredients = [];
    function addIngredients(firstIng, secIng, thirdIng) {
        ingredients.push(firstIng, secIng, thirdIng);
    }
  
    addIngredients('apples', 'bananas', 'grapes');
    addIngredients('oranges', 'pineapple', 'mangos');

    function displayJuice() {
        const output = document.getElementById('output');
        const ingredientsList = ingredients.join(', ');
        output.textContent = `The client orders a ${drinkSize} size drink, a juice composed by ${ingredientsList}.`;
    }
    displayJuice();
}
makeJuice('small')    

