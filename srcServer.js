var fs = require('fs');
var mime = require('./mime');
var path = require('path');

module.exports = function(pathname, response) {
	var realPath = "./src" + pathname;
	var ext = path.extname(realPath);
	ext = ext.slice(1);
	var contentType = mime[ext] || "text/plain";

	fs.readFile(realPath, "binary", function(err, file) {
		if (err) {
			response.writeHead(500, {
				'Content-Type': 'text/plain'
			});

			response.end(err);
		} else {
			response.writeHead(200, {
				'Content-Type': contentType
			});

			response.write(file, "binary");

			response.end();
		}
	});
}