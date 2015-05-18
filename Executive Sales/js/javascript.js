$(document).ready(function() {
    //for slider
    $(function() {
        $(".rslides").responsiveSlides();
    });


    //for mobile menu
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    $("#slide-nav").on("click", toggler, function(e) {
        var selected = $(this).hasClass('slide-active');
        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        $(this).toggleClass('slide-active', !selected);
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    $(window).on("resize", function() {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });

    //for scroll page

$(".arrow-btn").click(function() {       
        destination = $('main').offset().top;
        $("body:not(:animated)").animate({ scrollTop: destination }, 1000);
        $("html").animate({ scrollTop: destination }, 1000);
        return false;
});

$(".main-arrow-btn").click(function() {       
        destination = $('footer').offset().top;
        $("body:not(:animated)").animate({ scrollTop: destination }, 1000);
        $("html").animate({ scrollTop: destination }, 1000);
        return false;
    });


});