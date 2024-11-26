// const body = document.body.children;
// console.log(body)

const div1 = document.body.firstElementChild;
const div2 = document.body.children[0];
// they are the same lines result because the firstElementChild is the first element of the array called Children

const ulNode1 = document.body.firstElementChild.nextElementSibling;
const ulNode2 = document.body.children[1];

//Accessing Pete
const pete1 = ulNode1.lastElementChild;
const pete2 = document.body.children[1].children[1];
console.log(pete1);
console.log(pete2)