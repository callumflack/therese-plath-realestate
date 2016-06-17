/**
 * Created by bandi on 17/06/2016.
 */
$(document).ready(function(){
    $(document).on('change', '#sortcombo', function() {
        console.log('changed');
        console.log($('#sortcombo option:selected').val());
    });
});