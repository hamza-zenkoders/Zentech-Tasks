import fs from 'fs';

// Asynchronous file system operations

// Read a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Data : ', data)
})

// Write to a file
fs.writeFile('output.txt', 'This is output file!', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Wrote to a file successfully');
})

// Append data in a file
fs.appendFile('output.txt', '\nData in new line!', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Data appended successfully');
})

// Delete a file
fs.unlink('output.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File deleted successfully');
})

// Rename a file
fs.rename('file.txt', 'input.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Renamed file successfully');
})


// Synchronous file system operations

// Read file
const data = fs.readFileSync('file.txt', 'utf8');
console.log('Data : ', data); 

// Write to a file
fs.writeFileSync('output.txt', 'This is output file!');

// Append data in a file
fs.appendFileSync('output.txt', '\nNew data!');