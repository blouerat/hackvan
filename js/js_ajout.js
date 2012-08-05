$(document).ready(function() {
	$('.hiddenObject').click(function(){
		$(this).fadeOut(500, function(){
		  $(this).remove();
		  $('#desc_' + $(this).attr('id')).remove();
		  if(isWin()) onWin();
	  });
	});
	
	$('.carousel')
	.carousel( { interval: false } )
	.on('slide', slideScreenUpdate)
	.on('slid', slidScreenUpdate);
});

var slideScreenUpdate = function(e) { planIcons(slideEventActiveId(e)).fadeOut(100); };
var slidScreenUpdate = function(e) { planIcons(slideEventActiveId(e)).show(); };
function slideEventActiveId(e) {return e.currentTarget.getElementsByClassName('item active')[0].id; };
function planIcons(planId) { return $('.hiddenObject.' + planId); };
function isWin() {return $('.hiddenObject').length == 0};
function onWin() {alert('win!');}

