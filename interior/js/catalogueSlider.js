$(function() {
	// Catalogue Slider
	$('#main-slider').scrollbox({
		direction: 'h', // vertical or horizontal
		distance: 220 // the distance between items
	});

	$('.archive_previous').click(function() {
		$('#main-slider').trigger('backward');
	});
	$('.archive_next').click(function() {
		$('#main-slider').trigger('forward');
	});

	//Show/hide effect
	$(".effect").css("display", "none");
	// run the currently selected effect
	function runEffect(target) {
		// var elem = e.target;// get effect type from
		var selectedEffect = $("#effectTypes").val("bind");

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent: 0
			};
		} else if (selectedEffect === "size") {
			options = {
				to: {
					width: 200,
					height: 60
				}
			};
		}

		// run the effect
	$(target).parent().parent().find(".effect").toggle(selectedEffect, options, 500);
	};
	// set effect from select menu value

	$(".click").click(function(e) {
		var elem = e ? e.target : event.srcElement;
		runEffect(elem);
	});
});