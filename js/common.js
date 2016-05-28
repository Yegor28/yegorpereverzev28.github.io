$(document).ready(function() {

		$(".item").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

});

$(document).ready(function() {
$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});

	$(".img-wrapper").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

});