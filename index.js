//Reason to create package.json is to store all dependencies for this app, so that you can just press npm install and NPM will look through this package and install it in new devices
// npm install -D nodemon (-D represents devDependencies)

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request,response) => {
    // if(request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err; 
    //         response.writeHead(200, {'content-type': 'text/html'});
    //         response.end(content);
    //     })

    // };

    // if(request.url === '/api/users') {
    //     const users = {
    //         'CEO': 'Ben',
    //         'HomeAffairs': 'Nat'
    //     }

    //     response.writeHead(200, {'Content-Type': 'Application/JSON'})
    //     response.end(JSON.stringify(users));
    // }

    //Build File Path
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);

    // Get File Extension
    let extName = path.extname(filePath);

    //Initial Content-Type
    let contentType = 'text/html';

    //Check ext then set Content-Type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'img/png';
            break;
        case '.jng':
            contentType = 'img/jng';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.end(content, 'utf-8');
                })
            }
            else {
                //Some Server Error
                response.writeHead(500);
                response.end(`Server Error: ${err.code}`);
            }
        }
        else{
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    })
    
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));