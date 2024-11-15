import path from 'path';

// ES6 version of __dirname & __filename
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

console.log("Current Folder Path : ", __dirname);
console.log("Current File Path : ", __filename);
console.log('Current Directory : ',path.basename(__dirname))
console.log('Current File : ',path.basename(__filename))
console.log('Is Absolute Path : ',path.isAbsolute(__dirname))
console.log('Resolve Path : ',path.resolve('folder', 'file.txt'))
console.log('Parse Path : ',path.parse(__dirname))