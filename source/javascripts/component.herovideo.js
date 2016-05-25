
// --------------------------------------------------------------------------
// COMPONENT: HERO
// Youtube embed poster frame reveal
// See: http://codepen.io/pixelthing/pen/zGZKaQ
// --------------------------------------------------------------------------


$(document).on('click','.js-videoPoster',function(ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');

    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
    // if we're stopping all videos on page
    if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
    // if we're stopping a particular video
    } else {
    var $iframe = $wrapper.find('.js-videoIframe');
    }
    // reveal poster
    $wrapper.removeClass('videoWrapperActive');
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr('src','');
}


// Find YouTube videos inside Container--textColumn
// keep them in a 16by9 Aspect Ratio
var $allVideos = $("iframe[src^='https://www.youtube.com']:not(.videoIframe)"),

// The element that is fluid width
$fluidEl = $(".Container.Container--textColumn");

// When the window is resized
$(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

    var $el = $(this);

    var newHeight = newWidth * 0.56; // 16by9

    if (newHeight <= $el.attr('height')) {
        $el.height(newHeight);
    }

});

// Kick off one resize to fix all videos on page load
}).resize();
