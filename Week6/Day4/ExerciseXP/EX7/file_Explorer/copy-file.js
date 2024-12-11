const fs = require('fs');

fs.readFile('source.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading source.txt:', err);
        return;
    }
    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing to destination.txt:', err);
            return;
        }
        console.log('Content successfully copied to destination.txt');
    });
});