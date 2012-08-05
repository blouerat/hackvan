$(document).ready(function() {
	$('.hiddenObject').click(function(){
		$(this).fadeOut(500, function(){
			$(this).remove();
			$('#desc_' + $(this).attr('id')).remove();
			if(isWin()) onWin();
			var class_encours = $(this).attr('class');
			var tab_class_encours = class_encours.split(' ');

			var visible_plan = 0;
			$('.' + tab_class_encours[1]).each(function(){
				if($(this).is(':visible')){ visible_plan = 1; }
			});
			if(visible_plan == 0 && tab_class_encours[1] == 'plan1'){ $('#conteneur_plan1').show(); $('#informations_plan1').show(); }
			else if(visible_plan == 0 && tab_class_encours[1] == 'plan2'){ $('#conteneur_plan2').show(); $('#informations_plan2').show(); }
			else if(visible_plan == 0 && tab_class_encours[1] == 'plan3'){ $('#conteneur_plan3').show(); $('#informations_plan3').show(); }
			else if(visible_plan == 0 && tab_class_encours[1] == 'plan4'){ $('#conteneur_plan4').show(); $('#informations_plan4').show(); }
			else if(visible_plan == 0 && tab_class_encours[1] == 'plan5'){ $('#conteneur_plan5').show(); $('#informations_plan5').show(); }
		  
	  });
	});
	
	$('.carousel')
	.carousel( { interval: false } )
	.on('slide', slideScreenUpdate)
	.on('slid', slidScreenUpdate);
});

var slideScreenUpdate = function(e) 
{
	planIcons(slideEventActiveId(e)).fadeOut(100);
	$('.conteneur_plans').hide(); 
	$('.informations_plans').hide();
};
var slidScreenUpdate = function(e) 
{
	planIcons(slideEventActiveId(e)).show();
	
	var id_encours = $('.active').attr('id');
	var visible_plan_verif = 0;
	$('.' + id_encours).each(function(){
		if($(this).is(':visible')){ visible_plan_verif = 1; }
	});
	if(visible_plan_verif == 0)
	{
		$('#conteneur_' + id_encours).show(); 
		$(' #informations' + id_encours).show();
	}
};
function slideEventActiveId(e) {return e.currentTarget.getElementsByClassName('item active')[0].id; };
function planIcons(planId) { return $('.hiddenObject.' + planId); };
function isWin() {return $('.hiddenObject').length == 0};
function onWin() {alert('win!');}

