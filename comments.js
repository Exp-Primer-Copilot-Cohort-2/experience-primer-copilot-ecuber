// Create web server
// Create a web server that listens to requests on port 3000 and serves a file called comments.js. The file should be served with the correct content type.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/javascript'});
  fs.createReadStream('./comments.js').pipe(res);
}).listen(3000);
