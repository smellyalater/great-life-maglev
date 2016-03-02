



$(document).ready(function() {

//
// BEGIN click elements to expand/collapse content
//

    $('.js-more-expand').click(function() {
        var $moreButton = $(this);
        $(this).parent().next().slideToggle(400);
        // console.log($moreButton);       
    });
        // flipCaret();

//
//Expand email form on click
//

    $('.js-email-form-expander').click(function() {
        $('.email-form').slideToggle(400);
    });


//
// END click elements to expand/collapse content
//




//
// BEGIN Click links in nav to scroll you down to section
//

$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
});


//
// END Click links in nav to scroll you down to section
//




});