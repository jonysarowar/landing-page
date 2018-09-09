(function ($) {
	"use strict";
	
/*---------------------
	document ready function
--------------------- */	

jQuery(document).ready(function($){
	
   /*---------------------
		slicknav
   --------------------- */	
	   $('#nav').slicknav({	
		allowParentLinks: true
	   });	
   
   /*---------------------
		owl-carousel
   --------------------- */
	   var heroSlider = $('.screenshot-slider');
	   heroSlider.owlCarousel({
		   loop: true,
		   items: 5,
		   margin: 30,
		   nav: true,
		   dots: false,
		   autoplay: true,
		   navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		   responsive:{
			   0:{
				   items:3
			   },
			   480:{
				   items:4
			   },
			   767:{
				   items:5
			   }
		   }

	   });

	   var heroSlider = $('.client-single-slider');
	   heroSlider.owlCarousel({
		   loop: true,
		   items: 2,
		   margin: 30,
		   nav: false,
		   dots: true,
		   autoplay: true,
		   navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		   responsive:{
			   0:{
				   items:1
			   },
			   480:{
				   items:1
			   },
			   767:{
				   items:2
			   }
		   }

	   });
   
});

/*---------------------
	window load function
--------------------- */	

jQuery(window).load(function(){

	/*---------------------
		wow active
   --------------------- */	
   		new WOW().init();

});
   

})(jQuery);