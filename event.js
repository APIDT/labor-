const fs = require('fs');

function readTextFile(fileRead) {

    fs.readFile(fileRead, 'utf8', (err,  success) => {
        if (err) {
            console.error('Error reading file', err);
            return;
        }
        
        console.log('File content successfully retrieved:',  success);
    });
}

const fileRead = 'text.text';

readTextFile(fileRead);
