// Using Javascript:
// Retrieve the div and console.log it
const div = document.getElementById('container');
console.log(div);

// Change the name “Pete” to “Richard”.
const allUls = document.getElementsByClassName("list");
const firstUl = allUls[0];
const peteLi = firstUl.children[1];
peteLi.textContent = "Richard";

// Delete the second <li> of the second <ul>.
const secondUl = allUls[1];
const secondLi = secondUl.children[1];
secondLi.remove();

// Change the name of the first < li > of each < ul > to your name. (Hint : use a loop)

for (let i = 0; i < allUls.length; i++) {
    const firstLi = allUls[i].children[0];
    firstLi.textContent = "Arielle";
}

// Add a class called student_list to both of the <ul>'s.
for (let i = 0; i < allUls.length; i++) {
    allUls[i].classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.
const firstUl2 = allUls[0]; 
firstUl2.classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>.
const div2 = document.getElementById("container");
div.style.backgroundColor = "lightblue";
div.style.padding = "20px";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// const allUls = document.getElementsByClassName("list");
// const secondUl = allUls[1];
// const lastLi = secondUl.children[2];
// lastLi.style.display = 'none';//not working properly
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
const firstUl3 = allUls[0];
const richardLi = firstUl3.children[1];
richardLi.style.border = "2px solid black";
// Change the font size of the whole body.
document.body.style.fontSize = "18px";