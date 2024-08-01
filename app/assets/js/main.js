$(document).ready(function() {
  objectFitImages();
  //---------------------------------
  // Smooth Scrolling
  //---------------------------------

  $('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop:$(the_id).offset().top-50
    }, 'slow');

    return false;
  });


  $('#nav-btn').click(function () {
    $('#nav-btn').toggleClass('open');
    $('#nav').toggleClass('open');
  });

});
