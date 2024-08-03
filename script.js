import http from 'http';
import fs from 'fs';

var server = http.createServer(function(req, res){
    console.log('request was mde: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Howard',
        gender: 'Male',
        city: 'Hong Kong'
    };
    res.end(JSON.stringify(myObj));
});

let d = new Date();
document.body.innerHTML = "<h1>hello " + d + "</h1>"

server.listen(3000, '127.0.0.1');
console.log('listen to port 3000');
