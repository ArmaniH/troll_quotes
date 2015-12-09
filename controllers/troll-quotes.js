var express  = require("express");
var router   = express.Router();
var Author   = require("../models/author");
var Image    = require("../models/image");
var Quote    = require("../models/quote");
var mongoose = require("mongoose");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/randomTroll", function(req, res){
  Author.find({}).then(function(authors){
    var authorsCount = authors.length
    var randomCount = Math.floor(Math.random()*authors.length)
    author = authors[randomCount]
    Image.find({}).then(function(images){
      var imagesCount = images.length
      var randomCount = Math.floor(Math.random()*images.length)
      image = images[randomCount]
      Quote.find({}).then(function(quotes){
        var quotesCount = quotes.length
        var randomCount = Math.floor(Math.random()*quotes.length)
        quote = quotes[randomCount]
        res.json({
          author: author,
          image: image,
          quote: quote
        })
      })
    });
  });
});

router.get("/images", function(req, res){
  Image.find({}).then(function(image){
    res.json(image);
  });
});

router.get("/quotes", function(req, res){
  Quote.find({}).then(function(quote){
    res.json(quote);
  });
});

router.get("/authors", function(req, res){
  Author.find({}).then(function(author){
    res.json(author);
  });
});

module.exports = router;
