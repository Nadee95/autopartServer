var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var businessRouter = require('./routes/business.route');
var partRouter=require('./routes/part.route');

//mongoose.connect('mongodb://127.0.0.1:27017/dbAutomobilePartslk',{uri_decode_auth: true}, (err, db) => {
  mongoose.connect('mongodb://autopartsadmin:autoparts2018@ds237748.mlab.com:37748/autopartsdb',{uri_decode_auth: true}, (err, db) => {
  
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
/* app.use(function (req, res, next) {
  //set headers to allow cross origin request.
 res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
});*/
// POB
app.use('/api', indexRouter);
app.use('/api/business', businessRouter);
app.use('/api/part',partRouter);

module.exports = app;
