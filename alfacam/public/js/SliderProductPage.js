$(document).ready(function() {
// Slider for ProductPage 
	$('.slider-img').scrollbox({
		direction: 'h',
		autoPlay: false
	});
	$('.previous-img').click(function () {
		$('.slider-img').trigger('backward');
	});
	$('.next-img').click(function () {
		$('.slider-img').trigger('forward');
	});
	$('#thumbs').find('li .smalImg').click(function (e) {
		e.preventDefault();
		$('#largeImg').attr('src', $(this).attr('href'));
		$('#thumbs').find('.active').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
});