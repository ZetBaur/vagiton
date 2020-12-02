
$(document).ready(function(e){
	$('.popup-link').on('click', function(){
		$('.popup__overlay, .popup__window').fadeIn();
	});
	$('.popup__close').on('click', function(){
		$('.popup__overlay, .popup__window').fadeOut();
	});

	e.preventDefault();

});