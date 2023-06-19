// path module return file system related info
// like dirname and filename extension

const path = require('path');
const url = '/home/nitin/Desktop/nodejs/nodejsdsdcclass/pathmodule/index.js';

console.log(path.basename(url)) // retrun file name
console.log(path.dirname(url)); // return dirname
console.log(path.extname(__filename))

// path.parse();

console.log(path.parse(url)) // return below code ;
// {
//     root: '/',
//     dir: '/home/nitin/Desktop/nodejs/nodejsdsdcclass/pathmodule',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }