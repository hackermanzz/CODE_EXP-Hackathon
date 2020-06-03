//Load express library
var express = require('express');

//Create an instance of express
var app = express();
var api = require('../model/api.js');

//Usage of body-parser to parse HTTP POST Data
var bodyParser = require('body-parser')
var urlendcodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json()) //Parse application/json
app.use(urlendcodedParser) //Parse application/x-www-form-urlencoded

//API calls
