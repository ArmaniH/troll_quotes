var passport = require("passport")



function getSignup(req, res) {
  res.render("signup.hbs", { message: req.flash('signupMessage') });
}

function postSignup(req, res) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(req, res);
}

function getLogin(req, res) {
  res.render('login.hbs', { message: req.flash('loginMessage') });
}

function postLogin(req, res) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });
  return loginProperty(req, res);
}

function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
};
