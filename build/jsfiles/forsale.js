/**
 * Created by bandi on 17/06/2016.
 */
$(document).ready(function(){
	$(document).on('change', '#sortcombo', function() {
		if($('#sortcombo option:selected').val()=='suburb-ASC')
		{
			window.location.replace('/for-sale/index-ASC.html');
			//console.log('index-ASC.html');
		}

		if($('#sortcombo option:selected').val()=='suburb-DES')
		{
			window.location.replace('/for-sale/index-DES.html');
			//console.log('suburb-DES.html');
		}

		if($('#sortcombo option:selected').val()=='updated-DES')
		{
			window.location.replace('/for-sale/index.html');
			//console.log('index.html');
		}
	});
});
