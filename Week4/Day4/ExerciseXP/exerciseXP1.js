// Using a DOM property, retrieve the h1 and console.log it.
let header1 = document.querySelector('h1')
// console.log(header1)

// Using DOM methods, remove the last paragraph in the <article> tag.

let allP = document.querySelectorAll('p')
// let lastP = allP[allP.length - 1];
// lastP.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let header2 = document.querySelector('h2')
// header2.addEventListener('click', function () {
//     header2.style.background = 'red';
// });
 
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let header3 = document.querySelector('h3')
// header3.addEventListener('click', function () {
//     header3.style.display = 'none';
// })

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let allP = document.querySelectorAll('p')
let buttonBold = document.getElementById('btnBold');
// buttonBold.addEventListener('click', function () {
//     allP.forEach(p => {
//         p.style.fontWeight = 'bold';
//     });
// })

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
// header1.addEventListener('mouseover', function () {
//     header1.style.fontSize = Math.random()*100 +'px';
// })

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// let paragraph2 = allP[1]
// paragraph2.addEventListener('mouseover', function () {
//     paragraph2.style.transition = 'opacity 5s';
//     paragraph2.style.opacity = '0';
// })