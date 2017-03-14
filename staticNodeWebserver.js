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
           res.status(err.status).end();
        }
    });
});

// Get resources
app.get('/*', function (req, res) {  // Loads anything in the servers public dir, on request
    res.sendFile( __dirname + '/www' + req.path, function (err) {
        if (err) {
            res.status(err.status).end();
        }
    });
});



// Server Listen
var port = process.env.PORT || 8080
app.listen(port , function() {
    console.log('Server running at http:\\localhost:' + port  );
});
