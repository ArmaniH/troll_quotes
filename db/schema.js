var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URL || "mongodb://localhost/trollquotes");

var Schema = mongoose.Schema;
var ObjectId = Schema.objectId;

var AuthorSchema = new Schema(
  {
    name: String
  }
);

var QuoteSchema = new Schema(
  {
    text: String
  }
);

var ImageSchema = new Schema(
  {
    url: String
  }
);

var AuthorModel = mongoose.model("Author", AuthorSchema);
var ImageModel = mongoose.model("Image", ImageSchema);
var QuoteModel = mongoose.model("Quote", QuoteSchema);











// {
//   science-fiction: [
//       "I am your father",
//       "Use the force, Luke",
//       "There is no try"
//       ]
//   ],
//   politics: [
//       "I am not a crook",
//       "I did not have sex with that woman",
//       "But what you can do for your country"
//   ]
// }
