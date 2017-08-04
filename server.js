var express = require('express');
var browserify = require('browserify-middleware');
var morgan = require('morgan');
var path = require('path');
var config = require('./config.js');
var mongoose = require('mongoose');
var QuoteModel = require('./db/models/quote')
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/quotes');

QuoteModel.find().then(console.log)

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json())

app.get('/bundle.js', browserify('./react-client/index.js', {
    transform: [
        [require('babelify'), { presets: ['es2015', 'react'] }]
    ]
}));

app.use(express.static(path.join(__dirname, './react-client')));

app.get('/quotes/:id', function(req, res) {
    QuoteModel.find({ _id: req.params.id })
      .then(function(quotes) {
        res.json(quotes[0])
      })
})

app.get('/quotes', function(req, res) {
    QuoteModel.find().then(function(quotes) {
        res.json(quotes);
    });
})

app.post('/quotes', function(req, res) {
    var quote = new QuoteModel({
        content: req.body.content,
        link: req.body.link,
        title: req.body.title
    });

    quote.save(function(err, quote1) {
        if (err) {
            console.log(err);
        } else {
            res.json(quote1)
        }
    });
})

app.get('*', function(req, res) {
    res.send("I AM A WILDCARD")
})

app.use(function(req, res, next) {
    res.status(404).send('404 - Lion Heart will conquer all');
});

app.listen(4000, function() {
    console.log('Listening on port 4000');
});