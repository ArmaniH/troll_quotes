var Author = require("../models/author.js");

describe("An author", function(){

  it("should have a name", function(){
    var author = new Author("Benjamin Franklin");
    expect(author.name).toBeDefined();
    // expect(typeof author.name).toBe("string");
  });

  // it("should show on index page", function(){
  // });
  //
  // it("should be randomly generated", function(){
  // });
});
