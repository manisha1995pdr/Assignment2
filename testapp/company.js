var restful = require('node-restful');
var mongoose = restful.mongoose;


var companySchema = new mongoose.Schema({
	name:String,
});

module.exports = restful.model('tblcompany', companySchema)