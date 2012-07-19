
$(document).ready(function(){


 function RepositionNav(){ 
 	var windowHeight = $window.height(); 
 	var navHeight = $('#nav').height() / 2; var windowCenter = (windowHeight / 2); 
 	var newtop = windowCenter - navHeight; $('#nav').css({"top": newtop}); 
  } 

	//$('#nav').localScroll(800);
	
	RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});	
	
	$('#intro').parallax("50%", 0, 0.2, true);
	$('#second').parallax("50%", 0, 0.2, true);
	$('.bg').parallax("50%", 2750, 0.4, true);
	$('#third').parallax("50%", 2750, 0.2, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});
 
 })