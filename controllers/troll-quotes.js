var express = require("express");
var router = express.Router();
var Author = require("../models/author");
var Image = require("../models/image");
var Quote = require("../models/quote");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/authors", function(req, res){
  Author.find({}).then(function(author){
    res.json(author);
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


module.exports = router;
