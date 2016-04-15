
// Navbar Scroll Event
// @URL: http://codepen.io/Craig-Watson/pen/zGbNRL
// --------------------------------------------------------------------------

$(document).ready( function() {

    var lastScrollTop = 0;
    var navbar        = $('.Header--fixed');

    $(window).scroll(function(event) {
        var st = $(this).scrollTop();

        if (st > 143 && st > lastScrollTop){
            navbar.addClass('Header--fixed-transition');
        } else {
            navbar.removeClass('Header--fixed-transition');
        }

        lastScrollTop = st;

    });

});
