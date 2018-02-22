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

app.use(bodyParser.json());
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/getWeather',function(req,res){
  var uid = req.body.uid;
  var db = admin.database();
  var ref = db.ref('/users/'+uid);
  ref.once("value", function(data) {
    if(data.val()!=null){
      var weatherCity = data.val().country;
      weather.find({search:weatherCity, degreeType: 'C'}, function(err, result) {
        res.send(result[0].current);
        if(err) console.log(err);
      });
    }else{
      res.send(JSON.stringify({}));
    }
  });
});
app.listen(3310);