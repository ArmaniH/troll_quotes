var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String
  },
  twitter : {
    id: String,
    token: String,
    username: String,
    displayName: String
  },
  facebook : {
    id: String,
    token: String,
    first_name: String
  }
});



User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('User', User);
