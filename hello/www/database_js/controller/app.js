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
//To return user information
app.get('/api/user/:username',function (req,res){
    var username = req.params.username
    api.getUser(username, function(err,result){
        if (!err){
            res.send(result)
        }
        else{
            res.status(500).send("Some Error")
        }
    })
})

//To return counsellor information
app.get('/api/counsellor/:username',function (req,res){
    var username = req.params.username
    api.getUser(username, function(err,result){
        if (!err){
            res.send(result)
        }
        else{
            res.status(500).send("Some Error")
        }
    })
})