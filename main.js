var http = require('http');
var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World! from http server');
    response.end();
}).listen(8888);

console.log('Server running at http://localhost:8888');