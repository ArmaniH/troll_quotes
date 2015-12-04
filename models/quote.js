require("../db/schema");
var mongoose = require("mongoose");
var QuoteModel = mongoose.model("Quote");

module.exports = QuoteModel;

// function Quote(text){
//   this.text = text
// };
//
// module.exports = Quote;
