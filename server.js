var http = require('http');
var url = require('url');
var srcServer = require('./srcServer');

function server() {
    return http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        srcServer(pathname, response);
    });
}

module.exports = server;