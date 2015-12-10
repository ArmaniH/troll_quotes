$(document).ready(function(){
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
  $('.animated-button').click(function(e){
    e.preventDefault();
    // $('.image').toggle('display')
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

var i = 1;
  $('#export').on('click', function() {
    html2canvas($('#rectangle'), {
      "logging" : false,
      "allowTaint": true,
      onrendered: function(canvas) {
        var c= ($('<canvas/>', { id: "canvas"+i}));
        // document.body.appendChild(canvas);
        // canvas = ($('<canvas/>',{ id:"canvas"+i }));
        $("#favorites").append(canvas);
        // return Canvas2Image.saveAsPNG(canvas);
        // document.body.removeChild(canvas);
         var d= ($('<input/>',{ type:"button", id:"delete"+i, value:"delete"}));
         $("#favorites").append(d);
         i++;
      },
    });
  });

   $('#delete').on('click', function() {
        document.body.remove();
    });
});

  $('.button').click(function(e){
    e.preventDefault();
    var authorTag = $('.author');
    console.log(authorTag.text());
  });
