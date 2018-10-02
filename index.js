// Primary file for API.

// Dependencies
var http = require("http");
var url = require("url");
var StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string.
var server = http.createServer(function(req, res) {

    // Get the url and parse it.
    var parsedUrl = url.parse(req.url, true);

    // Get the path.
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, "");

    // Get the query string as an object.
    var queryStringObject = parsedUrl.query;

    // Get HTTP Method
    var method = req.method.toLowerCase()

    // Get the headers as the object.
    var headers = req.headers;

    // Get the payload if any.
    var decoder = new StringDecoder('utf-8');
    
    // Send the response.
    res.end("Hello world\n");

    // Log the request path.
    console.log("Request recieved with these headers", headers);
});


// Start the server, and have it listen on port 3000.
server.listen(3000, function() {
    console.log("the server is listening on port 3000 now.")
});