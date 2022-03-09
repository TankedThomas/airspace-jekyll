$(document).ready(function(){

	const counterUp = window.counterUp.default
	const el = document.querySelector( '.counter' )
	const mixer = mixitup("#portfolio-contant-active");


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});

	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// Google Maps
	function initMap() {
		const map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
	  });
	}


	// Counter
	counterUp( el, {
        delay: 10,
        time: 1000
    });


});