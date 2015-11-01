
$(document).ready(function(){
	
	var BillHeight = $('.billboard').height() / 2;

	$(window).scroll(function(){
		if ($(window).scrollTop() < BillHeight) {
	    	$( "header.fixed_nav" ).stop().animate({
	    		marginTop : '-81px'
			 }, 200);

			console.log($(window).scrollTop());
			 
	    } else {
	    	$( "header.fixed_nav" ).stop().animate({
	    		marginTop : 0
			 }, 200);
	    }

	});

});