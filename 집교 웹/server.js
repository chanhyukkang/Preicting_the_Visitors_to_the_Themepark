var express = require('express');
var http = require('http');
var ejs = require('ejs');
var static = require('serve-static');
var path=require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('port', 5002);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', require('./convert.js'));


http.createServer(app).listen(app.get('port'), function(){
    console.log("express start: %d ", app.get('port'));
});

