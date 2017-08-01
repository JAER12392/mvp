var express = require('express');
var browserify = require('browserify-middleware');
var morgan = require('morgan');
var path = require('path');
var config = require('./config.js');

var app = express();

app.use(morgan('dev'));

  app.get('/bundle.js', browserify('./react-client/index.js', {
    transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
  }));

  app.use(express.static(path.join(__dirname, './react-client')));

  app.use('/style.css', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'style.css'));
  });

  app.use(function(req, res, next) {
    res.status(404).send('404 - Lion Heart will conquer all');
  });

  app.listen(4000, function() {
    console.log('Listening on port 4000');
  });