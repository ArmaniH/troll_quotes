var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/troll_quotes");

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.render("layout.hbs");
});

// var trollQuotes = require("./controllers/troll-quotes")
// app.get("/troll-quotes", trollquotes.index)

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
