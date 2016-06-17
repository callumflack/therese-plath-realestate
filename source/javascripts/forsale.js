/**
 * Created by bandi on 17/06/2016.
 */
$(document).ready(function(){
    $(document).on('change', '#sortcombo', function() {
        if($('#sortcombo option:selected').val()=='suburb-ASC')
        {
            window.location.replace('/index.html');
        }

        if($('#sortcombo option:selected').val()=='suburb-DES')
        {
            window.location.replace('/index-reverse.html');
        }
    });
});