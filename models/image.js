require("../db/schema");
var mongoose = require("mongoose");
var ImageModel = mongoose.model("Image");

module.exports = ImageModel;

// function Image(url){
//   this.url = url
// };
//
// module.exports = Image;
