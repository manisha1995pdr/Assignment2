// dependencies
var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var url = 'mongodb://localhost/testdb'

// register student
var student = require('./student');
student.methods(['get', 'put', 'post', 'delete']);
student.register(router, '/student');

// register company
var company = require('./company');
company.methods(['get', 'put', 'post', 'delete']);
company.register(router, '/company');

// register company
var college = require('./college');
college.methods(['get', 'put', 'post', 'delete']);
college.register(router, '/college');

// return router
module.exports = router;
