var express           = require('express');
var passport          = require("passport");
var router            = express.Router();
var usersController   = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route('/auth/twitter')
   .get(passport.authenticate('twitter'));

router.route('/auth/twitter/callback')
   .get(passport.authenticate('twitter', {
     successRedirect: '/',
     failureRedirect: '/login'
     }));

router.route('/auth/facebook')
   .get(passport.authenticate('facebook'));

router.route('/auth/facebook/callback')
   .get(passport.authenticate('facebook', {
     successRedirect: '/',
     failureRedirect: '/login'
     }));     

module.exports = router;
