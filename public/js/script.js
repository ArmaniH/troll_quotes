$(document).ready(function(){

  $('a').click(function(e){
    e.preventDefault();
    var quoteUrl = "http://localhost:3000/quotes";
    $.getJSON(quoteUrl)
    .done(function(data){
      var quote = $('.quote');
      var quoteText = data[Math.floor(Math.random()*data.length)].text;
      quote.text(quoteText)
    
    })
  })
});
