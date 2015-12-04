var Image = require('../models/image.js');

describe( "An Image", function(){
  it("should have a url", function(){
    var image = new Image("http://imgur.com/Q84N3b6");
    expect(image.url).toBeDefined(jasmine.any(String));
  });

});
