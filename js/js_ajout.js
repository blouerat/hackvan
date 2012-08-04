$(document).ready(function() {
	$('.icones_find_me').click(function(){
		var id_encours = $(this).attr('id');
		var alt_encours = $(this).attr('alt');
		$(this).hide();
		$('#' + id_encours + '_ok').attr('src', 'img/icones/' + alt_encours + '_ok.png');
		var alt_encours = $('#' + id_encours + '_ok').attr('alt');
		alert('GG vous avez trouv\351 ' + alt_encours + '!');
	});
});