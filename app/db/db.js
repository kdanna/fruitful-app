var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fruitful', function(err){
	if(err){
		console.log('failed connecting to mongodb');
	}else{
		console.log('successful connection to Mongodb');
	}
});