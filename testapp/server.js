var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var router = require('./api')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, function(){
	console.log("Connected via port 3000");
});

// logging when an action is taken
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


app.use('/api', require('./api'));

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/testdb')