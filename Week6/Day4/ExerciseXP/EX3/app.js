const { readFile, writeFile, } = require('./fileManager.js')

const fileNameH = "Hello_World.txt"
console.log(readFile(fileNameH));
const fileNameB = "Bye_Word.txt"
const content = "Writing to the file"
console.log(writeFile(fileNameB, content));
 