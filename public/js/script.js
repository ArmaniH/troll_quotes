$(document).ready(function(){

  $('.animated-button').click(function(e){
    e.preventDefault();
    var randomTroll = "http://localhost:3000/randomTroll";
    $.getJSON(randomTroll)
    .done(function(res){
      console.log(res);
      var author = res.author.name;
      var quote = res.quote.text;
      var image = res.image.url;
      var authorTag = $('.author');
      var quoteTag = $('.quote');
      var imgTag = $('.image');
      authorTag.text(author);
      quoteTag.text(quote);
      imgTag.attr('src', image)
    })
  })
});
