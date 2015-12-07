require("./schema");
var mongoose = require("mongoose");
var db = mongoose.connection;
var AuthorData = require("./author_data");
var ImageData = require("./image_data");
var QuoteData = require("./quote_data");

db.on("error", function(err){
  console.log("Oops! Mongo threw an error. Is `mongod` running?");
  console.log(err.message);
  process.exit();
});

db.once("open", function(){
  console.log('connected');
  var Author = require("../models/author");
  var Image = require("../models/image");
  var Quote = require("../models/quote");

  Quote.remove({}).then(function(){
    for(var i = 0; i < QuoteData.text.length; i++){
      new Quote({text: QuoteData.text[i]}).save();
      console.log(new Quote({text: QuoteData.text[i]}));
    };
  }).then(Author.remove({}).then(function(){
    for(var i = 0; i < AuthorData.name.length; i++){
      new Author({name: AuthorData.name[i]}).save();
      console.log(new Author({name: AuthorData.name[i]}));
    };
  })).then(Image.remove({}).then(function(){
    for(var i = 0; i < ImageData.url.length; i++){
      new Image({url: ImageData.url[i]}).save();
      console.log(new Image({url: ImageData.url[i]}));
    };
  }))
});
