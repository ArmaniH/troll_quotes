var Author = require("../models/author.js");

// describe("A quote", function(){
//
//   it("should have a statement", function(){
//     expect(quote.statement).toBeDefined();
//     expect(typeof quote.statement).toBe("string");
//   });
  // it("should show on index page", function(){
  // });
  //
  // it("should be randomly generated", function(){
  // });
// });

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

// describe("An image", function(){
//
//   it("should have a url", function(){
//     expect(image.url).toBeDefined();
//     expect(typeof image.url).toBe("string");
//   });


  // it("should show on index page", function(){
  // });
  //
  // it("should be randomly generated", function(){
  // });
// });


// });
