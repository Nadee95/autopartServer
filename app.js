var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var businessRouter = require('./routes/business.route');

mongoose.connect('mongodb://127.0.0.1:27017/dbAutomobilePartslk',{uri_decode_auth: true}, (err, db) => {
  if (err) return console.log(err);
});
global.db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/business', businessRouter);

module.exports = app;
