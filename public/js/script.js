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
      imgTag.attr('src', image);
      authorTag.text("- " + author);
      quoteTag.text('"' + quote + '"');
    })
  })

  $('#export').on('click', function() {
    html2canvas($('#rectangle'), {
      "logging" : false,
      "allowTaint": true,
      onrendered: function(canvas) {
        theCanvas = canvas;
        document.body.appendChild(canvas);
        $("#favorites").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        document.body.removeChild(canvas);
      },
    });
  });
});
