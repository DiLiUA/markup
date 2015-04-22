$(function() {

	runSlider();
	modalWind();

	$(".click").click(function(e) {
		var elem = e ? e.target : event.srcElement;
		runEffect(elem);
	});
})

// Catalogue Slider
function runSlider() {
	var slider = $('#main-slider');
	if (slider.is(':visible')) {
		// debugger
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
	}
}



//Show/hide effect
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


//Modal window in Pricing
function modalWind() {
	// debugger
	$.each($(".modalWindow1"), function(index, value) {
		var content = $(this).parent().find(".price-window").clone(false);
		$(this).prepend(content);
		$(this).find("img").css({
			"float": "left",
			"paddingRight": "10px",
			"width": "50%"
		});
		$(this).find("p").css("paddingTop", "10px");
		$(this).find(".none").css("display", "block");
	});

	$(".modalWindow1").dialog({
		autoOpen: false,
		minWidth: 1000,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		},
		modal: true,
		open: function() {
			$('.ui-widget-overlay').bind('click', function() {
				$(".modalWindow1").dialog('close');
			})
		}
	});

	$(".click").click(function(e) {
		// debugger;
		var itemName = $(e.target).data('item');
		var winModal = $('.' + itemName);
		// var priceWin = $(e.target).parent().find(".price-window");
		// winModal.find(".price-window").css("display", "block");
		winModal.dialog("open");
	});
}