'use strict';

// [START all]
var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello Sho Kubernate 2222!');
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);
// [END all]