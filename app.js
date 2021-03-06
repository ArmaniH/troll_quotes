var express      = require("express");
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs          = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');



app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use("/", require("./controllers/troll-quotes"));


app.set("view engine", "hbs");
app.set("views", "./public/views");
app.use(express.static(__dirname + '/public'))



app.use(session({
  secret: 'TROLLY-SHIT',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});


var routes = require('./config/routes');
app.use(routes);

app.use(function(req, res, next) {
  res.status(404).render('error.hbs');
});




var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
