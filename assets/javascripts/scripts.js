$(document).ready(function(){

$('#menu-toggle').click(function(){
  $(this).toggleClass('open');

  var open = $('#menu-toggle');

  if((open).hasClass('open')) {
  	 $('.secodary-nav').css( "display", "inline-block");
  	 $('body').css( "position", "fixed");
  } else {
  	 $('.secodary-nav').css( "display", "none");
  	 $('body').css( "position", "initial");
  };


	$('.secodary-nav li a').on('click', function(){
		$('#menu-toggle').removeClass('open');
		$('.secodary-nav').css( "display", "none");
	  $('body').css( "position", "initial");
	
	});

});


$(function(){   
			var nav = $('.main-header');   
			$(window).scroll(function () { 
				if ($(this).scrollTop() > 140) { 
					nav.addClass("fixed"); 
					$('body').addClass("section-spacing"); 
				} else { 
					nav.removeClass("fixed"); 
					$('body').removeClass("section-spacing"); 
				} 
			});  
		});


	}); 

