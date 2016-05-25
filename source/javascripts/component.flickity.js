
// flickity carousel config
// @external: flickity.pkgd.js
// @url: http://flickity.metafizzy.co
// @url: http://codepen.io/desandro/pen/dPdVNM
// --------------------------------------------------------------------------

$(document).ready( function() {

    var $gallery = $('.gallery').flickity({
		arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 63, y2: 50,
            x3: 13
		},
        pageDots: true,
		wrapAround: true,
		autoPlay: 5000,
        lazyLoad: true,
		pauseAutoPlayOnHover: false,
        imagesLoaded: true
	});

    // For adding captions to a flickity instance:
    //
    // <div class="gallery">
    //     {% assign slide_images = assets | where: "meta.slide", "true" %}
    //     {% for images in slide_images %}
    //         <div class="gallery-cell" data-caption="{{ forloop.index }} of {{ forloop.length }} | {{images.meta.caption}}">
    //             <img src="{{images.url}}" >
    //         </div>
    //     {% endfor %}
    // </div>
    // <p class="gallery-caption u-marginTX2">&nbsp;</p>

    var $caption = $('.gallery-caption');

    // Flickity instance
    var flkty = $gallery.data('flickity');
    $gallery.on( 'cellSelect', function() {
        // set image caption using img's alt
        $caption.html( $( flkty.selectedElement ).data('caption') );
    });

});
