const {greet } = require('./greeting.js');
const {messColor } = require('./colorful-message.js');
const {read } = require('../files/read-file.js');

console.log(greet('Jonathan'));
console.log(messColor('blue', 'Laura'));
console.log(read('./files/file-data.txt'));

