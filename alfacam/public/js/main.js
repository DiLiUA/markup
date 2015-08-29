$(document).ready(function() {
$('.close-win-btn').click(function(){
	    $(this).parent().hide();
	    $('.overlay').hide();
	  });
	//Scroll top page
	$("A.top").click(function() {
		var w_cont = parseInt($(window).width());
		var w_page = 640;
		var w_page_320 = 320;
		if (w_cont < w_page_320) {
			var top = 10;
		} else if (w_cont < w_page) {
			var top = 10;
		} else {
			var top = 10;
		}
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - top
		}, 1800);
		return false;
	});

	//animate backet in main page
	$(".cart-container").hover(function() {
			$(this).children(".checkout-box").css('display', 'block');
			$(this).children(".checkout-box").stop(true, true).animate({
				"opacity": "1"
			}, 350);
		},
		function() {
			var checkoutbox = $(".checkout-box", this);
			$(checkoutbox).stop(true, true).animate({
				"opacity": "0"
			}, 250, function() {
				$(checkoutbox).css('display', 'none');
			});
		});

	// show dropdown menu in section page content 
	$(".nav-dropdown").mouseover(function() {
			$(this).children(".dropdown-list").css('display', 'block');
		})
		// hide dropdown menu in section page content 
	$(".nav-dropdown").mouseout(function() {
		$(this).children(".dropdown-list").css('display', 'none');
	})

	// Show/Hide Main Menu
	$('#show-menu').click(function() {
		$('#menu').stop(true, true).slideToggle('slow');
	});
	//Big header Slider
	if ($('#home-slider').length > 0) {
		$('#home-slider')
			.before('<div id="nav">')
			.cycle({
				fx: 'fade',
				speed: 1000,
				timeout: 3000,
				pager: '#nav',
				prev: '#prev',
				next: '#next'
			});
	}

	// Carousel slider in cintent(main Page)
	if ($("#carousel").length) {
		$('#carousel').jcarousel({
			wrap: 'circular',
			scroll: 1
		});
	}
	// Goods-slider
	var goodsItem = $('#goods-slider').find('.goods-item');
	var itemWidth = goodsItem.width();
	if ($(window).width() < '943') {
		$('.goods-list').css('width', $('#goods-slider').width());
	} else if ($(window).width() <= '1280') {
		$('.goods-list').css('width', itemWidth * Math.round(goodsItem.length / 2));
	} else if ($(window).width() > '1280') {
		$('.goods-list').css('width', itemWidth * goodsItem.length);
	}

	$(window).resize(function() {
		var goodsItem = $('#goods-slider').find('.goods-item');
		var itemWidth = goodsItem.width();
		if ($(window).width() < '943') {
			$('.goods-list').css('width', $('#goods-slider').width());
		} else if ($(window).width() <= '1280') {
			$('.goods-list').css('width', itemWidth * Math.round(goodsItem.length / 2));
		
		} else if ($(window).width() > '1280') {
			$('.goods-list').css('width', itemWidth * goodsItem.length);
		}
	});

	$('#goods-slider').scrollbox({
		autoPlay: false,
		direction: 'h'
	});
	$('#goods-slider-backward').click(function() {
		$('#goods-slider').trigger('backward');
	});
	$('#goods-slider-forward').click(function() {
		$('#goods-slider').trigger('forward');
	});

	// //slider for about us page
	makersIconsSliderInit();

	function makersIconsSliderInit() {
		$('.makers-icons').scrollbox({
			autoPlay: false,
			linear: true,
			step: 1,
			delay: 0,
			speed: 10
		});
		$('.prev-maker-btn').click(function() {
			$('.makers-icons').trigger('backward');
		});
		$('.next-maker-btn').click(function() {
			$('.makers-icons').trigger('forward');
		});
	}

	//header slider manufacture
	manufactureIconsSliderInit();

	function manufactureIconsSliderInit() {
		$('.manufacture-icons').scrollbox({
			autoPlay: false,
			linear: true,
			step: 1,
			delay: 0,
			speed: 10
		});
		$('.bottom-maker-btn').click(function() {
			$('.manufacture-icons').trigger('backward');
		});
		$('.top-maker-btn').click(function() {
			$('.manufacture-icons').trigger('forward');
		});
	}
});