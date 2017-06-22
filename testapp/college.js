var restful = require('node-restful');
var mongoose = restful.mongoose;
var company = require('./company')

var collegeSchema = new mongoose.Schema({
	name:String,
	company:[{type:mongoose.Schema.Types.ObjectId, ref:'company'}]
});

module.exports = restful.model('tblcollege', collegeSchema)