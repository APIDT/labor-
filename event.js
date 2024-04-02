const fs = require('fs');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function readTextFile(fileRead) {
    fs.readFile(fileRead, 'utf8', (err, success) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        console.log('File content successfully retrieved:', success); 
    });
}

const fileRead = 'text.text';

readTextFile(fileRead);

eventEmitter.on('readFile', (success) => {
    console.log('File has been read successfully:', success);
});


eventEmitter.on('error', (err) => {
    console.error('Error occurred:', err);
});

eventEmitter.emit('readFile', 'text.text'); 
