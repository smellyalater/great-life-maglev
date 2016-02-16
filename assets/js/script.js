jQuery.extend(jQuery.easing,{
    easeInOutExpo: function(x, t, b, c, d){
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

//Expand div on click of "more"
// function expandMoreOnClick() {
//       var $moreButton = $(this);
//         $(this).parent().next().slideToggle(400);        
//     };



$(document).ready(function() {

      


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

});