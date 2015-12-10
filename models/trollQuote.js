require("../db/schema");
var mongoose = require("mongoose");
var TrollQuoteModel = mongoose.model("TrollQuote");

module.exports = TrollQuoteModel;
