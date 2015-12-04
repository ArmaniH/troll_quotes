require("./schema");
var mongoose = require("mongoose");
var db = mongoose.connection;
var AuthorData = require("./author_data");
var ImageData = require("./image_data");
var QuoteData = require("./quote_data");

db.once("open", function(){
  var Author = require("../models/author");
  var Image = require("../models/image");
  var Quote = require("../models/quote");

    
});
