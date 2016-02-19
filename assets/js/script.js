jQuery.extend(jQuery.easing,{
    easeInOutExpo: function(x, t, b, c, d){
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});




$(document).ready(function() {

      

    //click elements to expand/collapse content
    $('.js-more-expand').click(function() {
        var $moreButton = $(this);
        $(this).parent().next().slideToggle(400);
        // console.log($moreButton);       
    });
        // flipCaret();

    //Expand email form on click
    $('.js-email-form-expander').click(function() {
        $('.email-form').slideToggle(400);
    });

    // END click elements to expand/collapse content



    //Click links in nav to scroll you down to section
    $('a[href=#]').click(function(e){
        e.preventDefault();
        $('nav').removeClass('visible');
        $('html,body').stop().animate({scrollTop: $('.'+$(this).data('scrollto')).offset().top-65 }, 700, 'easeInOutExpo', function(){});
    });

    $('.toggle-menu').click(function(){
        $('nav').toggleClass('visible');
    });

    if($(window).width() < 800){
        $('.pricing > div > div:nth-of-type(3)').insertAfter($('.pricing > div > div:nth-of-type(1)'));
    }

    // END Click links in nav to scroll you down to section

    //Youtube Junk
      $(".youtube").each(function() {
    // Set the BG image from the youtube ID
    $(this).css('background-image', 'url(https://i.ytimg.com/vi_webp/' + this.id + '/mqdefault.webp)');
    // Click the video div
    $(document).delegate('#' + this.id, 'click', function() {
      // Build embed URL
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      // Grab extra parameters set on div
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
      // Build iframe tag
      var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).append(iframe);
    });// /click
  }); // /each video




});