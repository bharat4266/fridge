var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var foodRouter = require('./routes/myFridge');

var ObjectID = mongodb.ObjectID;

var FOODS_COLLECTION = "foods"; //ques

var app = express();
app.use(bodyParser.json());
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

app.use('/api', foodRouter);


var mongoDB = 'mongodb://admin:admin123@ds161459.mlab.com:61459/drashti';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
module.exports = app;