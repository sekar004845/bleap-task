// sticky navbar
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 50) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});





// Home Page News and Updates
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items: 4, // Default number of items
        nav: true, // Enable navigation arrows
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // FontAwesome icons for arrows
        autoplay: true, // Enable autoplay
        responsive: {
            0: {
                items: 1, // 1 item on mobile
            },
            600: {
                items: 2, // 2 items on tablet
            },
            1000: {
                items: 2, // 2 items on desktop
            }
        }
    });
});

