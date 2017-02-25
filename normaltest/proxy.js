const fs = require('fs');

let someStr = `An object whose own enumerable properties constitute descriptors for the properties to be defined or modified. Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors (see Object.defineProperty() for more details). Descriptors have the following keys:`

const utf8 = new Buffer(someStr, 'utf8');

const base64 = utf8.toString('base64');
const base64Buffer = new Buffer(base64, 'utf8');
fs.writeFileSync('./base64', base64Buffer);

let basestr = fs.readFileSync('./base64','utf8');

let basegetbu = new Buffer(basestr, 'base64');
console.log(basegetbu.toString('utf8'))
