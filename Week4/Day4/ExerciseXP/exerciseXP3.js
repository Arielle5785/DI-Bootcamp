// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter.This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let allBoldItems;
function getBoldItems() {
    allBoldItems = document.querySelectorAll
        ('p strong');
}
getBoldItems();
allBoldItems.forEach((item) => {
    console.log(item.textContent)
});

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    })
}
// highlight()

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    })
}
// returnItemsToDefault()

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout',returnItemsToDefault)