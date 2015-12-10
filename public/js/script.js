$(document).ready(function() {
  var response;
  var randomTroll = "http://localhost:3000/randomTroll";
  $.getJSON(randomTroll)
    .done(function(res) {
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
  $('.animated-button').click(function(e) {
    e.preventDefault();
    // $('.image').toggle('display')
    var randomTroll = "http://localhost:3000/randomTroll";
    $.getJSON(randomTroll)
      .done(function(res) {
        response = res;
        console.log(response);
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

  });

  var i = 1;
  $('#export').on('click', function() {
    html2canvas($('#rectangle'), {
      "logging": false,
      "allowTaint": true,
      onrendered: function(canvas) {
        $("#favorites").append(canvas);
      //Delete button not working at this time
        // var d = ($('<input/>', {
        //   type: "button",
        //   id: "delete" + i,
        //   value: "delete"
        // }));
        // $("#favorites").append(d);
        i++;
      },
    });
  });

  $('#delete').on('click', function() {
    document.body.remove();
  });

  $('#button').click(function(e) {
    e.preventDefault();
    console.log(response);
  });

  $('.menu').on('click', function(e) {
  e.preventDefault();
  $(this).next().toggleClass('active');
});



// Courtesy: http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
$(document).click(function (e) {
    var containers = $('.menu, .nav');
    if (!containers.is(e.target) && containers.has(e.target).length === 0){
        containers.removeClass('active');
    }
});





});
