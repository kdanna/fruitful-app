      // <!-- Node configuration -->
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();


// require('./db/db');
// require('./db/seed');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//main home route for the site
app.use('/', express.static('public'));



app.listen(3000, function(){
	console.log ("server is up");

});