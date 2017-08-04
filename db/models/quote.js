var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  content: String,
  link: String,
  title: String 
});

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;