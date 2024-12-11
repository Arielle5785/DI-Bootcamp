const _ = require('lodash');
const math = require('mathjs');

const round =(a) => math.round(math.e, a);
const sub =(b,c) => _.subtract(b,c);


module.exports = {
    round,
    sub
}