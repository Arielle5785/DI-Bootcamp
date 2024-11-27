// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(function () {
//     alert('Hello World');
// }, 2000)
    

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setTimeout(function () {
//     let container = document.getElementById('container');
//     let newParagraph = document.createElement('p');
//     newParagraph.textContent = 'Hello World';
//     container.appendChild(newParagraph);
// }, 2000
// );

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// let container2 = document.getElementById('container');
// let ClearButton = document.getElementById('clear');

// let interval = setInterval(function() {
//     let newParagraph2 = document.createElement('p');
//     newParagraph2.textContent = 'Hello World';
//     container2.appendChild(newParagraph2);
// }, 2000);
// ClearButton.addEventListener('click', function () {
//     clearInterval(interval);
//     alert('Interval has been cleared, no more paragraphs can be added.');
// });

let container3 = document.getElementById('container');

let interval3 = setInterval(function () {
    let newParagraph3 = document.createElement('p');
    newParagraph3.textContent = 'Hello World';
    container3.appendChild(newParagraph3);
    if (container3.querySelectorAll('p').length >= 5) {
        clearInterval(interval3);
        alert('we\'ll stop adding paragraphs after 5.')
    }
}, 2000);

