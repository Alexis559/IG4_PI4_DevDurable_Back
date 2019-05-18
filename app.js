var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * We call the router with by default IP/psl/api as url to access the api
 */
var api = require('./routes/router');
app.use('/psl/api', api);

module.exports = app;