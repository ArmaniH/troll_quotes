var Quote = require("../models/quote.js");

describe("a quote", function(){
  it("should have text", function(){
    //expect quote to be a string
    var quote = new Quote("text");
    expect(quote.text).toBeDefined();
  });

  it("selects from an array", function(){

  });
});
