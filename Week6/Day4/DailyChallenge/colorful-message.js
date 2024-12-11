const chalk = require('chalk').default;
const { greet } = require('./greeting.js')

// console.log(chalk.green(greet('Robert')));

const messColor = (colour, name) => chalk[colour](greet(name));

// console.log(messColor('red', 'Arielle'));

module.exports = {
    messColor
}



