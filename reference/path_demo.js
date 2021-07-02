const path = require('path');

// Gets Base File name
// console.log(path.basename(__filename));

// Gets Directory name
// console.log(path.dirname(__filename));

// Get File extension
// console.log(path.extname(__filename));

//Create path Object
// console.log(path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));