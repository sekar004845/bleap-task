// sticky navbar
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 50) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});