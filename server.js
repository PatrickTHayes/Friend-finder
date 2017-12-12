var bodyParser = require("body-parser");
var path = require("path");
var express = require('express');
var app = express();


var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes=require('./app/routing/apiRoutes.js');
var data = require('./app/data/friends.js');
var PORT = process.env.PORT || 3000;
htmlRoutes(app);
apiRoutes(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.listen(8080);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

