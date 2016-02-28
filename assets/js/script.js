



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


    //Click links in nav to scroll you down to section
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

    // END Click links in nav to scroll you down to section

    //Youtube Junk
      $(".youtube").each(function() {
    // Set the BG image from the youtube ID
    $(this).css('background-image', 'url(//i.ytimg.com/vi_webp/' + this.id + '/mqdefault.webp)');
    // Click the video div
    $(document).delegate('#' + this.id, 'click', function() {
      // Build embed URL
      var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      // Grab extra parameters set on div
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
      // Build iframe tag
      var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).append(iframe);
    });// /click
  }); // /each video




});