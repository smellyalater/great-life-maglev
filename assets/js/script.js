



$(document).ready(function() {

//
// BEGIN mobile menu 
//

// $('.toggle-menu').click(function() {
//   $(this).next().toggleClass('mobile-active');
// });

$('.hamburger').click(function() {
  $(this).next().toggleClass('mobile-active');
  $(this).toggleClass('is-active');
});


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




//
// BEGIN formspree email form
//

var $contactForm = $('.email-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/dr.chonie@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            // $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            // console.log("before send");
            // debugger;
        },
        success: function(data) {
            // $contactForm.find('.alert--loading').hide();
            $contactForm.html('  <div class="thank-you-message"><p>Thank you for the love!</p><div class="mail-image-holder"><img class="mail-image animated bounceOutRight" alt="love mail icon" src="assets/images/love-mail.png" /></div><p>We\'ll get back to you as soon as possible!</p>');
            // console.log("success");
            // debugger;
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
        }
    });
});

//
// END formspree email form
//




});