var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
<<<<<<< HEAD

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

// app.get("/", function(req, res){
//   res.render("layout.hbs");
// });


app.use("/", require("./controllers/troll-quotes"));
=======

>>>>>>> fe22dc887ae29ba5e5fccdb6b10301409cc5da27

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
