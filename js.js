$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 30) {
    	$('.nav').addClass('change');
    }
    else {
    $('.nav').removeClass('change');
    }
  });
});