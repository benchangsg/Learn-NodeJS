const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.toString());

//Get Host (root domain)
console.log(myUrl.host);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.searchParams);

//Add parameters
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through parameters
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));
