'use strict';

// [START all]
var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello Kubernetes!');
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);
// [END all]