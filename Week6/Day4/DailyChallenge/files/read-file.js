const fs = require('fs');

const read = (filename) => {
    return fs.readFileSync(filename, 'utf-8');
};

// console.log(read('file-data.txt'));
module.exports = {
    read
}
