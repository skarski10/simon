var Simon = require('./../js/simon.js').simonGo;

$(document).ready(function() {

  $('#start').submit(function() {
    event.preventDefault();
    // colorSelect.forEach(function(color) {
      $('#red').show();
      // colorDisplay();
    // });
  });

  $('.red').submit(function(){
    event.preventDefault();
    for (var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($(".red").val());
      }
    }
  });

  $('#blue').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#blue").val());
      }
    }
  });

  $('#green').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#green").val());
      }
    }
  });

  $('#yellow').submit(function(){
    event.preventDefault();
    for(var i = 0; i <= colorSelect.length; i++)
    {
      if(counter < colorSelect.length)
      {
        checker($("#yellow").val());
      }
    }
  });

});
