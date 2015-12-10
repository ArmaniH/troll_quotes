var TwitterStrategy  = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy    = require('passport-local').Strategy;
var User             = require('../models/user');
var env              = require('../env');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  passport.deserializeUser(function(id, callback){
    User.findById(id, function(err, user){
      callback(err, user);
    });
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback){
    console.log("this is being hit")
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) return callback(err);
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      } else {
        var newUser            = new User();
        newUser.local.email    = email;
        newUser.local.password = newUser.encrypt(password);
        newUser.save(function(err) {
          if (err) throw err;
          return callback(null, newUser);
        });
      }
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback){
    User.findOne({'local.email': email}, function(err, user){
      if(err) return callback(err, false)
      if(!user){
        return callback(null, false, req.flash('loginMessage','No user found'))
      }
      if(!user.validPassword(password)){
        return callback(null, false, req.flash('loginMessage','Oops! Wrong Password'))
      }

      return callback(null, user)
    });
  }));

  passport.use('twitter', new TwitterStrategy({
      consumerKey: env.twitter.consumerKey,
      consumerSecret: env.twitter.consumerSecret,
      callbackUrl: env.callbackUrl
    }, function(token, secret, profile, done){
      process.nextTick(function(){
        User.findOne({'twitter.id': profile.id}, function(err, user){
          if(err) return done(err);

          if(user){
            return done(null, user);
          }
          else {
            var newUser = new User();

            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.username = profile.username;
            newUser.twitter.displayName = profile.displayName;

            newUser.save(function(err){
              if(err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }));

  passport.use('facebook', new FacebookStrategy({
      clientID: env.facebook.clientID,
      clientSecret: env.facebook.clientSecret,
      callbackURL: env.facebook.callbackURL
    }, function(token, secret, profile, done){
      process.nextTick(function(){
        User.findOne({'facebook.id': profile.id}, function(err, user){
          if(err) return done(err);

          if(user){
            return done(null, user);
          }
          else {
            var newUser = new User();

            newUser.facebook.id = profile.id;
            newUser.facebook.token = token;
            newUser.facebook.username = profile.username;
            newUser.facebook.first_name = profile.first_name;

            newUser.save(function(err){
              if(err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }));
};
