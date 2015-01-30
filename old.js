var Connection = require('ssh2');
 
var conn = new Connection();
conn.on('ready', function() {
  console.log('Connection :: ready');
  conn.exec('uptime', function(err, stream) {
    if (err) throw err;
    stream.on('exit', function(code, signal) {
      console.log('Stream :: exit :: code: ' + code + ', signal: ' + signal);
    }).on('close', function() {
      console.log('Stream :: close');
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '109.234.154.170',
  port: 22,
  username: 'root',
  password: 'g8p2g5mg'
});


/*
var spawn = require('child_process').spawn;


var child = spawn('ssh', ['-t', '-o', 'StrictHostKeyChecking=no', 'root@109.234.154.170']);

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