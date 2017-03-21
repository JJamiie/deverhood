
$(window).load(function() {
  $(".loading").delay(1200).hide(0);
});

(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 'slow');
        if ($(window).width() < 992) {
            $('.button-collapse').trigger("click");
        }
    }

});

$('.carousel.carousel-slider').carousel({
    fullWidth: true
});


function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
}

autoplay()
