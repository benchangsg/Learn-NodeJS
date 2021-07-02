const fs = require("fs");
const path = require("path");

//Create and Write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello ChangMan",
//   (err) => {
//     if (err) throw err;
//     console.log("File created and written to...");

//     //Append to file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love Node.JS",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Rename file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloworld.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File renamed...");
//   }
// );
