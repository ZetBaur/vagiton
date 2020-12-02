

$(document).ready(function(){
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

$(window).scroll(function(){
	if($(this).scrollTop() > 900){
		$('.pageup').fadeIn();
	}else{
		$('.pageup').fadeOut();

	}
});
$("a[href^='#']").click(function(){
	var _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});
// =====================FORM Validate================================================================================
$("input[name=phone]").mask("+7 (999) 999-99-99");

	  function validateForms (form){
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
			  name:  {
				required: "We need your email address to contact you",
				minlength: jQuery.validator.format("At least {0} characters required!")
			  },
			  email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			  },
			  phone:{
				required: "Please enter your phone number",
			  }


			}

		
		  });
	  }
	  validateForms('#commentForm');


// =====================MENU ITEMS================================================================================
  
$('.header__menu-item').on('click', function(){
	$('.header__menu-item').removeClass('active');
	$(this).addClass('active');
});


// ================MENU and BURGER=============================================================================
    $('.burger').on('click', function(){
        $('.menu').toggleClass('open');
    });

    $('.menu-item').on('click', function(){
        if($('.menu').hasClass('open')){
            $('.menu').removeClass('open');
        }
    });

    $('html, body').on('click', function(e){
        if($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu-item, .burger')){
            $('.menu').removeClass('open');
        }
	});
// ================MENU and BURGER=============================================================================
	



// =====================ibg================================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
// =====================ibg================================================================================

// ==========UP==================================================================================================

$(window).scroll(function() {
		var w=$(window).width();
	if($(window).scrollTop()>50){
		$('#up').fadeIn(300);
	}else{
		$('#up').fadeOut(300);
	}
});
$('#up').click(function(event) {
	$('body,html').animate({scrollTop:0},300);
});

});
// ==========UP==================================================================================================
