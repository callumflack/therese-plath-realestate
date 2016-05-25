

// --------------------------------------------------------------------------
//   FONTFACE ON LOAD
//   requires: fontfaceonload.js
//   requires: _component.fontfaceonload.scss
//   see: https://github.com/zachleat/fontfaceonload/
//   see: http://www.zachleat.com/web/critical-webfonts/
// --------------------------------------------------------------------------


FontFaceOnload("regular", {
    success: function() {
        document.documentElement.className += " regular-loaded";
    }
});
