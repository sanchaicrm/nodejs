var express = require("express");
var app     = express();
var path    = require("path");

app.get('/auth',function(req,res){
  res.sendFile(path.join(__dirname+'/auth.html'));
});
app.listen(8080);