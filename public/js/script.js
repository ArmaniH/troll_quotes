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

  $('#export').on('click', function() {
    html2canvas($('#rectangle'), {
      "logging" : false,
      "allowTaint": true,
      onrendered: function(canvas) {
        theCanvas = canvas;
        console.log(theCanvas)
        document.body.appendChild(canvas);
        $("#favorites").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        // document.body.removeChild(canvas);
      },
    });

//     function downloadCanvas(link, canvasId, filename) {
//     link.href = document.getElementById('#favorites').toDataURL('#favorites');
//     link.download = filename;
// }
//
//   function nowSave(){
//       var namefile = prompt("insert name of file to save in png");
//       if(namefile === "") {
//           alert("You must enter name of file")
//       } else {
//       downloadCanvas(document.getElementById("download"), 'canvas', namefile + ".png");
//       }
//   }
//
// document.getElementById('download').addEventListener('click', nowSave, false);
  });

  });

  $('.button').click(function(e){
    e.preventDefault();
    var authorTag = $('.author');
    console.log(authorTag.text());
  });
