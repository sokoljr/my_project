$(document).ready(function() {

	$("body").css("display","none").fadeIn(1000);
	
	var $fixedMenu = $("#fixedMenu");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 240 && $fixedMenu.hasClass("normalize")) {
			$fixedMenu.fadeOut(300,function() {
				$(this).removeClass("normalize")
				.addClass("fixed")
				.fadeIn(300);
			});
		} else if ($(this).scrollTop() <= 240 && $fixedMenu.hasClass("fixed")) {
			$fixedMenu.fadeOut(300,function()	{
				$(this).removeClass("fixed")
					.addClass("normalize")
					.fadeIn(300);
			});
		}
	});

	$('#dropdown').has('.dropdown-menu').mouseover(function() {
    	$(this).children('.dropdown-menu').stop().show(300);
    	})
    .mouseout(function() {
    	$(this).children('.dropdown-menu').stop().hide(300);
    	});	

	$('.carousel').carousel({
        interval: 3000
    });

    $('#scrollup img').mouseover( function scrollUp() {
		$(scrollUp()).animate( {
			opacity: 0.65
		},100);
	}).mouseout( function() {
		$(scrollUp()).animate( {
			opacity: 1
		},100);
	}).click( function scrollUp() {
		$('body,html').animate( { 
			scrollTop: 0 
		}, 400);
		return false;
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 0) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('fast');
		}
	});

	var $yourWeather = $('html, body');
	$('a[href*="#your_weather"]').click(function() {
    	$yourWeather.animate( {
        	scrollTop: $($.attr(this, 'href')).offset().top
    	}, 600);
    	return false;
	});

	$( function() {
    	$( "#accordion" ).accordion ({
    	heightStyle: "content",
    	});
  	});

  	$('#slick_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		focusOnSelect: true,
		prevArrow: $(".slider_disign .slider_controls.left"),
		nextArrow: $(".slider_disign .slider_controls.right"),
	});
	$(".slider_disign .slider_controls")
});