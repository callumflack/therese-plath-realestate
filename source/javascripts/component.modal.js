( function($) {

    // Based on OUI's dropdown.js
    // See also Todd Motto's data attribute manipulations: https://goo.gl/dFE49n
    // Basics: http://stackoverflow.com/questions/2937227/what-does-function-jquery-mean

    function closeModal() {

        var MODAL        = "[data-modal]",
            ACTIVE_CLASS = "is-active";

        $(MODAL).removeClass(ACTIVE_CLASS);
    }

    // Show the modal in the DOM
    $(document).on("click", "[data-modal-toggle]", function(e) {

        e.stopPropagation();

        // Close any open modals.
        closeModal();

        var MODAL        = "[data-modal]",
            ACTIVE_CLASS = "is-active";

        $(MODAL).addClass(ACTIVE_CLASS);

        // Clicking anywhere outside the modal nav closes the modal.
        // Only attaches if a modal has been triggered.

        $(document).bind("click.modalNav", function() {

            var MODAL        = "[data-modal]",
                ACTIVE_CLASS = "is-active";

            // If any modal is visible, close it.
            if ( $(MODAL).hasClass(ACTIVE_CLASS) ) {
                closeModal();
            }

            $(document).unbind("click.modalNav");

        });

    });


})( jQuery );
