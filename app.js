var express = require("express");
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
var weather = require('weather-js');
var path    = require("path");
var app     = express();

var serviceAccount = require(path.join(__dirname+'/serviceAccount.json'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejs-testlab.firebaseio.com"
});
/*var db = admin.database();
var ref = db.ref('/users');
ref.once("value", function(data) {
  console.log(data.val());
  weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
  });
});*/
app.use(bodyParser.json());
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/getWeather',function(req,res){
  var uid = 'NqJ3ixNIQuWj0JKxbz4zvY81GMr1';
  var weatherCity = 'San Francisco, CA';
  weather.find({search:weatherCity, degreeType: 'C'}, function(err, result) {
    res.send(result[0].current);
    if(err) console.log(err);
    //console.log(JSON.stringify(result, null, 2));
  });
});
app.listen(8080);
/*
var https = require('https');
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
  app.post('/getWeather',function(req,res){

    /*var idToken = '';
    admin.auth().verifyIdToken(idToken).then(function(decodedToken) {
      var uid = decodedToken.uid;
      console.log(uid);
    }).catch(function(error){

    });
    console.log(req.body);
    res.send(req.body);*/
    /*res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
  });
app.get('/auth',function(req,res){
  var options = {
    host:'samples.openweathermap.org',
    path : 'data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
    method : 'GET',
    rejectUnauthorized:false
  };
  https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log(chunk);
    });
  });
  res.sendFile(path.join(__dirname+'/auth.html'));
});
app.listen(8080);*/