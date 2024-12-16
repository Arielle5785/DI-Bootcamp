const fs = require('fs');

const read = () => {
    fs.readFile('source.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading source.txt:', err);
            return;
        }
    });
}
    const write = () => {
        fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing to destination.txt:', err);
            return;
        }
        console.log('Content successfully copied to destination.txt');
    });
}
read()
write()
module.exports = {
    read,
    write,
}