// JavaScript Web Server

// Required resources
var express = require('express');

// Init. vars
var app = express();
var root = __dirname;

// Get index
app.get('/', function (req, res) {  // Loads hompage on request
    res.sendFile( __dirname + '/www/index.html', function (err) {
        if (err) {
			console.log(err);
           	try {
				res.status(err.statusCode);
			}
			catch (e){
				res.status(500);
			}
        }
		res.end();
    });
});

// Get resources
app.get('/*', function (req, res) {  // Loads anything in the servers public dir, on request
    res.sendFile( __dirname + '/www' + req.path, function (err) {
        if (err) {
			console.log(err);
			try {
				res.status(err.statusCode);
			}
			catch (e){
				res.status(500);
			}
			
        }
		res.end();
    });
});



// Server Listen
var port = process.env.PORT || 8080;
app.listen(port , function() {
    console.log('Server running at http://127.0.0.1:'  + port  );
});
