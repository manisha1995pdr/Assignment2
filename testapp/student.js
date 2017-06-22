var restful = require('node-restful');
var mongoose = restful.mongoose;
var college = require('./college')
var company = require('./company')

var studentSchema = new mongoose.Schema({
	name:String,
	department: String,
	rollno: Number,
	cgpa: Number,
	company:[{type:mongoose.Schema.Types.ObjectId, ref:'company'}],
	college : {type:mongoose.Schema.Types.ObjectId, ref:'college'}
});

module.exports = restful.model('tblstudent', studentSchema)