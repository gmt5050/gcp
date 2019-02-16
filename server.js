var http = require('http');
var handleRequest = function( request, response) {
    response.writeHead(200);
    response.end("hello world!");

}
var wwww = http.createServer(handleRequest);
wwww.listen(8080);