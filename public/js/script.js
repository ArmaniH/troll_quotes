$(document).ready(function(){
  var quoteUrl = "http://localhost:3000/quotes";
  $('a').click(function(e){
    e.preventDefault();
    $.getJSON(quoteUrl)
    .done(function(data){
      var quote = $('.quote');
      var quoteText = data[0].text;
      quote.text(quoteText)
    }).then(function(){
      var authorUrl = "http://localhost:3000/authors";
      $.getJSON(authorUrl)
      .done(function(data){
        var author = $('.author');
        var authorName = data[0].name;
        author.text(authorName);
      }).then(function(){
        var imgUrl = "http://localhost:3000/images";
        $.getJSON(imgUrl)
        .done(function(data){
          var img = $('.image')
          var imgPath = data[0].url;
          img.attr('src', imgPath)
        })
      })
    })
  })
  // $.ajax({
  //   type: 'GET',
  //   dataType: 'json',
  //   url: "http://localhost:3000/authors"
  // }).done(function(response) {
  //   console.log(response);
  // }).fail(function(response){
  //   console.log("Ajax get request failed.");
  // });
  // $('.author')
});
// $("[attribute='value']")
