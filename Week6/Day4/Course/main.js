// console.log('my first node.js file');


// let arr = [1, 2, 3]
// arr.map(item => {
//     console.log(item);
    
// })
//Module System
// 1. core libraries - FileSystem, http, pass
// 2. modules - creating our own module: function to be exported.
// 3. NPM - node package manager (YARN)

const hello = (name) => {
    return `Hello, ${name}, welcome to NodeJS`
}
console.log(hello('John'));
let a = 10;
module.exports = {
    hello,
    a,
}
