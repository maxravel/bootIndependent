$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('.nav').addClass('change');
    }
    else {
      $('.nav').removeClass('change');
    }
  });
});