var mongoose = require("mongoose");
mongoose.connect("mongodb://locahost/troll_quotes");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.objectId;

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
