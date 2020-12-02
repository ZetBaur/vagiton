
$(document).ready(function(e){
	$('.popup-link').on('click', function(){
		$('.popup__overlay, .popup__window').fadeIn();
		if ($('.header__menu-list').is('.open')) {
			$('.header__menu-list, .header__burger ').removeClass('open');
		}
	});
	$('.popup__close').on('click', function(){
		$('.popup__overlay, .popup__window').fadeOut();
	});
});