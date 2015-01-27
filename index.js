var IP = require('os').networkInterfaces()['venet0:0'][0].address;
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World123\n');
}).listen(8080, IP);

console.log('Server running at http://'+IP+'/');