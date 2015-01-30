var spawn = require('child_process').spawn;


var child = spawn('ssh', ['-o', 'StrictHostKeyChecking=no', 'root@109.234.154.170']);

child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});


child.stderr.on('data', function (data) {
    child.stdin.write('g8p2g5mg');
    console.log('stderr'+data);
});


child.stdin.on('data', function (data) {
    console.log('stdin: ' + data);
});


child.on('close', function (code) {
    console.log('close');
});

child.on('data', function (code) {
    console.log('data');
});


/*
var IP = require('os').networkInterfaces()['venet0:0'][0].address;
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Всем привет!\n');
}).listen(80, IP);

console.log('Server running at http://'+IP+'/');
*/