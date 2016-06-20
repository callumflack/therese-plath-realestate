/**
 * Created by bandi on 17/06/2016.
 */
$(document).ready(function(){
	$(document).on('change', '#sortcombo', function() {
		if($('#sortcombo option:selected').val()=='suburb-ASC')
		{
			window.location.replace('/recent-sales/index-ASC.html');
		}

		if($('#sortcombo option:selected').val()=='suburb-DES')
		{
			window.location.replace('/recent-sales/index-DES.html');
		}

		if($('#sortcombo option:selected').val()=='updated-DES')
		{
			window.location.replace('/recent-sales/index.html');
		}
	});
});
