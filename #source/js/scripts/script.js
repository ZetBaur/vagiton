

$(document).ready(function () {

	// =====================SLIDER================================================================================

	$('.production__item-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.testimonials__inner').slick({
		arrows: false,
		autoplay: true,
		fade: true
	});

	// =====================SCROLL TO TOP================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();

		}
	});
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
	// =====================FORM Validate================================================================================

	$("input[name=phone]").mask("+7 (999) 999-99-99");

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "We need your email address to contact you",
					minlength: jQuery.validator.format("At least {0} characters required!")
				},
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com"
				},
				phone: {
					required: "Please enter your phone number",
				}


			}


		});
	}
	validateForms('#commentForm');

	// ================MENU and BURGER=============================================================================

	$('.header__burger').on('click', function () {
		$('.header__menu-list, .header__burger ').toggleClass('open');
	});

	$('.header__menu-item a, .popup-link').on('click', function () {
		if ($('.header__menu-list').is('.open')) {
			$('.header__menu-list, .header__burger ').removeClass('open');
		}
	});

	// ==========UP==================================================================================================

	$(window).scroll(function () {
		var w = $(window).width();
		if ($(window).scrollTop() > 50) {
			$('#up').fadeIn(300);
		} else {
			$('#up').fadeOut(300);
		}
	});
	$('#up').click(function (event) {
		$('body,html').animate({ scrollTop: 0 }, 300);
	});

});
