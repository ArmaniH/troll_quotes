require("../db/schema");
var mongoose = require("mongoose");
var AuthorModel = mongoose.model("Author");

module.exports = AuthorModel;
// function Author(name){
//   this.name = name
// };
//
// module.exports = Author;
