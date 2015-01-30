var mysql      = require('mysql');
var conn = {
    user: 'root'
};

console.log(conn);

var connection = mysql.createConnection(conn);
console.log('11111111111111111111');
connection.connect(function(err) {
    console.log('22222222222222222222');
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
/*
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Всем привет! = \n');
}).listen(process.env.PORT||80, process.env.IP||null);

console.log('Server running at.');*/