// create a file with fs with json ext and insert some object data convert it in json by stringify 
/// read the data in parse object 

const fs = require('fs');

// create a obj 
const person = {
    names: 'deepak',
    age: 28
}
const data = JSON.stringify(person);

// create a file with json ext
fs.writeFile('./jsontxt.json',data, (data) => {
    console.log('file created');
});

// read the json file and console it in object by parse
fs.readFile('./jsontxt.json', 'utf-8', (err,data) => {
    let res = JSON.parse(data);
    console.log(res);
})
